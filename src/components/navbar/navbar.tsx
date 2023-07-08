"use client";
import SignIn from "../sign-in-btn/sign-in";
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {

    const [showMenu, setShowMenu]: any = useState(false)



    return (
        <>
            <nav className='sticky top-0 left-0 z-50 bg-sky-950 flex items-center justify-around w-full h-16 sm:h-20'>
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
                    <Link href="/home/cart"><Image src="/images/cart-icon.png" alt="cart-icon" width={25} height={25} className="invert cursor-pointer md:h-8 w-8 opacity-100 hover:opacity-80"></Image></Link>
                    <div className="hamburger md:hidden" onClick={() => setShowMenu(!showMenu)}>
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                        <div className="line h-0.5 w-5 bg-white my-0.5"></div>
                    </div>
                    <SignIn />
                </div>
            </nav>

            <div className={showMenu ? "block" : "hidden"}>
                <ul className='fixed top-16 left-0 z-40 flex-col md:hidden w-full items-start bg-sky-950'>
                    <Link href="/home"><li className='border-t-2 border-t-slate-300 p-2 text-slate-300 text-sm xl:text-base  hover:text-white font-medium cursor-pointer w-full'>Home</li></Link>
                    <Link href="/about"><li className='border-t-2 border-t-slate-300 p-2  text-slate-300 text-sm   hover:text-white font-medium cursor-pointer w-full'>About</li></Link>
                    <Link href="/products"><li className='border-t-2 border-t-slate-300 p-2  text-slate-300 text-sm   hover:text-white font-medium cursor-pointer w-full'>
                        Products</li></Link>
                    <Link href="/contact"><li className='border-t-2 border-t-slate-300 border-b-2 border-b-slate-300 p-2 text-slate-300 text-sm  hover:text-white font-medium cursor-pointer w-full'>
                        Contact</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar