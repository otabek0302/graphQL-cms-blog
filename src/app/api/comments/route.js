import { GraphQLClient, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_API;

export async function POST(req) {
  try {
    const { name, email, comment, tag } = await req.json();

    if (!name || !email || !comment) {
      return new NextResponse("Name, Email, and Comment are required", {
        status: 400,
      });
    }

    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
      },
    });

    // Create the comment
    const createCommentQuery = gql`
      mutation CreateComment(
        $name: String!
        $email: String!
        $comment: String!
        $slug: String!
      ) {
        createComment(
          data: {
            name: $name
            email: $email
            comment: $comment
            post: { connect: { slug: $slug } }
          }
        ) {
          id
        }
      }
    `;

    const createCommentResult = await graphQLClient.request(
      createCommentQuery,
      {
        name,
        email,
        comment,
        slug: tag,
      }
    );

    // Extract the id of the newly created comment
    const commentId = createCommentResult.createComment.id;

    // Publish the comment
    const publishCommentQuery = gql`
      mutation PublishComment($commentId: ID!) {
        publishComment(where: { id: $commentId }) {
          id
          name
          # Include other fields you may need from the published comment
        }
      }
    `;

    const publishCommentResult = await graphQLClient.request(
      publishCommentQuery,
      {
        commentId,
      }
    );

    if (publishCommentResult) {
      return new NextResponse(createCommentResult, { status: 201 });
    } else {
      return new NextResponse("Failed to publish comment", { status: 500 });
    }
  } catch (err) {
    console.error("Database Error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
}
