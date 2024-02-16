import Image from "next/image";
import Link from "next/link";

const PostCard = ({ item }) => {
    const { title, slug, excerpt, picture, author, updatedAt } = item.node;
    return (
        <div className="relative rounded-xl mb-5 lg:mb-8">
            
            <div className="relative rounded-xl overflow-hidden w-full h-[55vw] sm:h-[350px] md:h-[400px] lg:h-[500px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.9] before:z-[1]">
                <Image className="object-cover" fill src={picture?.url} alt={title} />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
                <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="flex items-center">
                        <div className="relative w-[6vw] sm:w-12 h-[6vw] sm:h-12">
                            <Image className="border-2 border-border rounded-full" fill src={author.photo?.url} alt={author?.name} />
                        </div>
                        <div className="ms-1 sm:ms-4">
                            <h4 className="text-[2.5vw] sm:text-base lg:text-lg leading-normal font-semibold text-copy-light">
                                {author?.name}
                            </h4>
                            <p className="text-[1.5vw] sm:text-xs leading-snug text-copy-lighter">
                                {new Date(updatedAt).toDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                    <Link href={`/posts/${slug}`}>
                        <h3 className="text-[4.5vw] sm:text-3xl leading-normal font-semibold text-primary-content">
                            {title}
                        </h3>
                        <p className="text-[1.5vw] sm:text-sm  mt-2 text-copy-lighter leading-snug">
                            {excerpt}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard