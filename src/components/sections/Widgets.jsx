"use client"
import Image from "next/image"
import Link from "next/link"

import { getRecentPosts, getReletedPosts } from "@/services"
import { useEffect, useState } from "react"

const Widgets = ({ category, slug }) => {
    const [recentPosts, setRecentPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getReletedPosts(category, slug).then((res) => setRecentPosts(res))
        } else {
            getRecentPosts().then((res) => setRecentPosts(res))
        }
    }, [])


    return (
        <div className="mb-12 hidden lg:block">
            <h3 className="text-xl mb-2.5 font-bold px-2.5">Recent Posts</h3>
            <div className="flex flex-col p-5 bg-primary-content shadow-lg rounded-xl border-border border">
                {
                    recentPosts && recentPosts.map((post, i) => (
                        <div key={i} className="w-full flex items-center my-2.5 p-2.5 cursor-pointer border border-primary-content hover:border hover:border-border hover:rounded-xl hover:shadow-md">
                            <div className="flex-none">
                                <div className="w-16 h-16 relative overflow-hidden rounded-xl">
                                    <Image
                                        alt={post?.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                        src={post.picture?.url || "/logo.png"}
                                    />
                                </div>
                            </div>
                            <div className="flex-grow ml-4">
                                <Link href={`/posts/${post?.slug}`} className="text-sm font-normal text-copy">{post?.title}</Link>
                                <p className="text-secondary text-[10px]">{new Date(post?.createdAt).toDateString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Widgets