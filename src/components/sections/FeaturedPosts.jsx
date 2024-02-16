"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import { getRecentPosts } from '@/services';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPosts = () => {
    const [recentPosts, setRecentPosts] = useState([])

    useEffect(() => {
        getRecentPosts().then((res) => setRecentPosts(res))
    }, [])
    return (
        <div className='mb-2.5 sm:mb-5 overflow-hidden block lg:hidden'>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    recentPosts && recentPosts.map((post, i) => (
                        <SwiperSlide key={i} className='mySwiperItem'>
                            <div className="flex items-center cursor-pointer">
                                <div className="flex-none">
                                    <div className="w-[25vw] sm:w-32 h-[25vw] sm:h-32 relative overflow-hidden rounded-lg sm:rounded-xl">
                                        <Image
                                            alt={post?.title}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                            src={post.picture?.url || "/logo.png"}
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow ml-1.5 sm:ml-4">
                                    <Link href={`/posts/${post?.slug}`}>
                                        <span className='text-[3.5vw] sm:text-xl font-semibold leading-normal line-clamp-2 text-copy'>{post?.title}</span>
                                    </Link>
                                    <p className="text-[1.5vw] sm:text-xs leading-snug">{new Date(post?.createdAt).toDateString()}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default FeaturedPosts