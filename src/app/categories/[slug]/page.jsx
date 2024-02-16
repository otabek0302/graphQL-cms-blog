import { getCategoryPost } from "@/services"
import Image from "next/image";
import Link from "next/link";

const CategoriesPage = async ({ params }) => {
    const slug = await params?.slug
    const categoryPosts = await getCategoryPost(slug)

    return (
        <section className="container mx-auto">

            <div className="max-w-sm sm:max-w-2xl mx-auto text-center my-5 sm:my-10">
                <h1 className="font-heading text-[6vw] sm:text-4xl lg:text-6xl font-bold">
                    <span>Read new by </span>
                    <span className="font-serif italic leading-normal">Categories</span>
                </h1>
            </div>

            <div className="max-w-5xl mx-auto">
                {
                    categoryPosts.map(({ node }, i) => (
                        <div key={i} className="flex flex-wrap lg:flex-nowrap items-center py-12 border-t-2 border-gray-100">
                            <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
                                <div className="relative w-44 h-32 overflow-hidden rounded-xl">
                                    <Image className="object-cover" src={node.picture?.url} fill alt={node.title} />
                                </div>
                            </div>
                            <div className="w-full lg:w-9/12 px-4 mb-10 lg:mb-0">
                                <div className="max-w-2xl">
                                    <span className="block text-copy-darker mb-1">{new Date(node?.createdAt).toDateString()}</span>
                                    <p className="text-2xl font-semibold text-copy">{node?.title}</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-auto px-4 ml-auto text-right">
                                <Link  href={node.slug}>
                                    <span className="transition duration-500 ease hover:bg-primary-dark inline-block bg-primary text-lg font-medium rounded-lg sm:rounded-xl text-white px-[8vw] sm:px-12 py-[2vw] sm:py-2.5 cursor-pointer">Read</span>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default CategoriesPage