import Link from 'next/link';
import { getCategories } from '@/services';

const Categories = async ({ slug }) => {
    const categories = await getCategories();

    return (
        <div className={`mb-2.5 lg:mb-12 ${slug && "mt-5"}`}>
            {
                !slug && <h3 className="text-[3vw] sm:text-xl leading-normal mb-1 sm:mb-2.5 font-bold px-0 lg:px-2.5">Categories</h3>
            }
            <div className='flex items-center flex-wrap gap-x-2 px-0 lg:px-1'>
                {
                    categories && categories?.map((category, i) => (
                        <Link key={i} href={`/categories/${category?.slug}`}>
                            <p className={`cursor-pointer px-[2vw] py-[1vw] sm:p-3.5 bg-primary-content hover:bg-primary-content ${ slug ? "rounded-sm sm:rounded-md text-[2vw] sm:text-sm leading-normal shadow-sm" : "rounded-sm sm:rounded-md text-[2vw] sm:text-sm leading-normal shadow sm:shadow-lg" }`}>{category?.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories