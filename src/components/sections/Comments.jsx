import { getComments } from '@/services'

const Comments = async (params) => {
    const slug = await params?.slug
    const comments = await getComments(slug)

    return (
        <section className='my-10'>
            <div className="pb-1 sm:pb-2.5 border-b border-border">
                <h3 className="text-[4vw] sm:text-lg lg:text-3xl leading-snug sm:leading-normal font-bold text-copy">Recent reviews</h3>
            </div>
            {
                comments.map((comment) => (
                    <div key={comment.id} className="flex px-2.5 sm:px-10 py-1.5 sm:py-5 lg:py-8 border-b border-border">
                        <div className="grow flex flex-col ">
                            <h4 className="text-[2.5vw] capitalize sm:text-lg leading-none sm:leading-normal font-bold text-copy ">{comment.name}</h4>
                        </div>
                        <div className="w-1/2"> 
                            <p className="text-[2vw] sm:text-xs lg:text-base text-justify text-copy-darker leading-snug mb-2 sm:mb-8">{comment.comment}</p>
                            <p className="text-[1.5vw] sm:text-[10px] leading-none text-end text-primary">{new Date(comment.createdAt).toDateString()}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Comments