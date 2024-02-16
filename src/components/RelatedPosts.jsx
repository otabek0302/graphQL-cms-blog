import Image from "next/image"
import Link from "next/link"

import { getReletedPosts } from "@/services"

const RelatedPosts = async ({ categories, slug }) => {
    const relatedPost = await getReletedPosts(slug, categories)

    return (
        <section>
            <div className="py-10 sm:py-20 overflow-hidden">
                <div className="mx-auto">

                    <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Read similar posts</h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">We've helped some great companies brand, design and get to market.</p>
                    </div>

                    <div className="flex flex-wrap">
                        {
                            relatedPost.map((post, i) => (
                                <div className="w-full lg:w-1/3 px-4 mb-8" key={i}>
                                    <Link className="block max-w-md mx-auto group relative" href={post.slug}>
                                        <div className="absolute bottom-0 left-0 w-full p-5">
                                            <div className="p-[3.5vw] sm:p-5 bg-white rounded-xl">
                                                <h4 className="text-[3.5vw] sm:text-sm leading-snug sm:leading-normal font-semibold">{post.title}</h4>
                                                <div className="hidden group-hover:flex justify-end mt-5 items-center text-primary font-semibold">
                                                    <span className="mr-2">Read article</span>
                                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.82994 5.28995L2.58994 1.04995C2.49698 0.95622 2.38638 0.881826 2.26452 0.831057C2.14266 0.780288 2.01195 0.75415 1.87994 0.75415C1.74793 0.75415 1.61723 0.780288 1.49537 0.831057C1.37351 0.881826 1.26291 0.95622 1.16994 1.04995C0.983692 1.23731 0.87915 1.49076 0.87915 1.75495C0.87915 2.01913 0.983692 2.27259 1.16994 2.45995L4.70994 5.99995L1.16994 9.53995C0.983692 9.72731 0.87915 9.98076 0.87915 10.2449C0.87915 10.5091 0.983692 10.7626 1.16994 10.9499C1.26338 11.0426 1.3742 11.116 1.49604 11.1657C1.61787 11.2155 1.74834 11.2407 1.87994 11.2399C2.01155 11.2407 2.14201 11.2155 2.26385 11.1657C2.38569 11.116 2.4965 11.0426 2.58994 10.9499L6.82994 6.70995C6.92367 6.61699 6.99806 6.50638 7.04883 6.38453C7.0996 6.26267 7.12574 6.13196 7.12574 5.99995C7.12574 5.86794 7.0996 5.73723 7.04883 5.61537C6.99806 5.49351 6.92367 5.38291 6.82994 5.28995Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <Image className="block w-full h-[55vw] sm:h-80 rounded-lg" src={post.picture?.url} alt={post.title} width={500} height={500} />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedPosts