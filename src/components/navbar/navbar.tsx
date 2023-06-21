import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <nav className='bg-sky-950 flex items-center justify-around w-full h-16 sm:h-20'>
                <div className="flex items-center justify-center text-white -skew-x-12 w-1/2 md:w-1/3">
                    <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl cursor-pointer">Sneaker</h1>
                    <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-yellow-500 cursor-pointer">World</h1>
                </div>
                <ul className='hidden md:flex flex-wrap justify-evenly items-center'>
                    <Link href="/home"><li className='px-2 lg:px-6 text-slate-300 text-sm xl:text-base 2xl:text-lg hover:text-white font-medium cursor-pointer'>Home</li></Link>
                    <Link href="/about"><li className='px-2 lg:px-6 text-slate-300 text-sm xl:text-base 2xl:text-lg hover:text-white font-medium cursor-pointer'>About</li></Link>
                    <Link href="/products"><li className='px-2 lg:px-6 text-slate-300 text-sm xl:text-base 2xl:text-lg hover:text-white font-medium cursor-pointer'>
                        Products</li></Link>
                    <Link href="/contact"><li className='px-2 lg:px-6 text-slate-300 text-sm xl:text-base 2xl:text-lg hover:text-white font-medium cursor-pointer'>
                        Contact</li></Link>
                </ul>
                <div className="flex justify-evenly items-center w-1/3 md:w-1/4">
                    <Image src="/images/cart-icon.png" alt="cart-icon" width={25} height={25} className="invert cursor-pointer md:h-8 w-8"></Image>
                    <div className="hamburger md:hidden">
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                    </div>
                    <Button variant="secondary" className="hidden sm:block cursor-pointer text-sky-950 font-semibold 2xl:text-lg 2xl:h-12">Sign In</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar