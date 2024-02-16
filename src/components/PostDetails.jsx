import Image from 'next/image';

import { getContentFragment } from '@/utils/getContentFragment';

const PostDetails = ({ title, excerpt, picture, author, createdAt, content }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <div className="flex w-full items-center gap-x-1 sm:gap-x-3">
          <div className="relative w-[10vw] sm:w-14 h-[10vw] sm:h-14 rounded-full border border-border overflow-hidden ">
            <Image className="object-cover" fill src={author?.photo?.url || ""} alt={author?.name} />
          </div>
          <div className="grow">
            <div className="flex justify-between items-center gap-x-0 sm:gap-x-2">
              <span className="text-[4vw] sm:text-xl leading-normal font-bold text-copy">{author?.name}</span>
              <span className="text-[2vw] sm:text-xs leading-none text-copy-darker">{new Date(createdAt).toDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 md:space-y-8">
        <div className="space-y-1 sm:space-y-3">
          <h2 className="text-[6vw] sm:text-2xl font-bold lg:text-3xl leading-normal">{title}</h2>
          <p className="text-[3vw] sm:text-lg leading-tight text-copy">{excerpt}</p>
        </div>
        <figure>
          <div className='relative w-full h-[50vh] rounded-md sm:rounded-xl overflow-hidden border border-border'>
            <Image className="object-cover" src={picture.url} fill alt={title} />
          </div>
          <figcaption className="mt-0 sm:mt-3 text-[2vw] sm:text-sm text-center text-copy-darker">
            {title}
          </figcaption>
        </figure>
        <div className="space-y-1 sm:space-y-3">
          {
            content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

              return getContentFragment(index, children, typeObj, typeObj.type);
            })
          }
        </div>
      </div>
    </section>
  )
}

export default PostDetails