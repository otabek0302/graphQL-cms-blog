import Categories from "@/components/sections/Categories";
import PostCard from "@/components/PostCard";
import Widgets from "@/components/sections/Widgets";

import { getPosts } from "@/services";
import FeaturedPosts from "@/components/sections/FeaturedPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="container mx-auto mt-0 lg:mt-10">
      <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-5 xl:gap-12">
        <div className="lg:w-2/3">
          {posts && posts.map((post, i) => <PostCard key={i} item={post} />)}
        </div>
        <div className="lg:w-2/6 overflow-hidden">
          <div className="lg:sticky relative top-0 lg:top-8">
            <Widgets />
            <FeaturedPosts />
            <Categories />
          </div>
        </div>
      </div>  
    </section>
  );
}
