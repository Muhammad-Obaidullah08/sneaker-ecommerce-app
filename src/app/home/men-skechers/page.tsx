"use client";
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/Footer"
import Counter from "@/components/counter/counter"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-10 uppercase text-sky-950">Men Skechers</h1>
            </div>

            <section className="flex flex-col md:flex-row justify-center items-center mt-5">
                <div className="flex justify-center items-center md:mx-5 md:w-1/2">
                    <Image src="/images/product2-image.png" alt="products" width={300} height={300} className="h-72 sm:h-80 w-60 sm:w-72 md:w-80"></Image>
                </div>
                <div className="md:w-1/2">
                    <div className="mx-10 my-10">
                        <h2 className="font-bold text-xl sm:text-2xl">Product Detail</h2>
                        <p className="my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, in quibusdam culpa quis animi ducimus eos repudiandae maiores quos porro rem ratione.</p>
                    </div>
                    <div className="mx-10 my-10 flex justify-between">
                        <h2 className="font-bold text-xl sm:text-2xl">Price</h2>
                        <p className="font-semibold text-sky-950 sm:text-lg lg:mr-10">100$</p>
                    </div>
                    <Counter />
                    <div className="flex justify-between m-10">
                        <Link href="/home"><Button className="bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold">Go Back</Button></Link>
                        <Button className="bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold">Add To Cart</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Page