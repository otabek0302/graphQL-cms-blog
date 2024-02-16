import Link from 'next/link'

import { getCategories } from '@/services'

const Header = async () => {
    const categories = await getCategories()
    return (
        <header className='container mx-auto py-[2.5vw] sm:py-5 lg:py-10'>
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link className="text-[5vw] sm:text-2xl lg:text-4xl font-bold leading-snug text-copy" href="/">GraphCMS</Link>
                </div>
                <div className="transition-all duration-300">
                    {
                        categories && categories.slice(0, 4).map((category, i) => (
                            <Link className="bg-primary-content text-[1.6vw] md:text-xs lg:text-base text-copy mr-[1vw] sm:mr-2.5 lg:mr-5 border-[0.5px] border-border p-[1vw] sm:px-3.5 sm:py-2.5 rounded-sm sm:rounded-md shadow-sm" key={i} href={`/categories/${category?.slug}`}>{category?.title}</Link>
                        ))
                    }
                </div>

            </nav>
        </header>
    )
}

export default Header