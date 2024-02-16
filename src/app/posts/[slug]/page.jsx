import { getPostDetails } from '@/services'

import Comments from '@/components/sections/Comments'
import Form from '@/components/sections/Form'
import PostDetails from '@/components/PostDetails'
import Categories from '@/components/sections/Categories'
import RelatedPosts from '@/components/RelatedPosts'


const PostDetailsPage = async ({ params }) => {
  const slug = await params?.slug
  const post = await getPostDetails(slug)

  return (
    <section className="container mx-auto">
      <div className="w-full md:max-w-5xl pt-6 lg:pt-10 pb-12 mx-auto">

        <PostDetails {...post} />
        <Categories slug />
        <Comments slug={post.slug} />
        <Form slug={post.slug} />
        <RelatedPosts categories={post.categories.map((c) => c.slug)} slug={post.slug} />

      </div>
    </section>
  )
}

export default PostDetailsPage