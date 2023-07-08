import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/navbar"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mt-10 uppercase text-sky-950">Our Products</h1>
            </div>

            <section className="flex flex-wrap justify-center items-center my-10">
                <Link href="/products/green-mesh"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/1.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Green Mesh Sole</p>
                        <p>200$</p>
                    </div>
                </div></Link>
                <Link href="/products/red-sneakers"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/2.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Red Sneakers</p>
                        <p>150$</p>
                    </div>
                </div></Link>
                <Link href="/products/yellow-sneakers"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/3.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Yellow Sneakers</p>
                        <p>250$</p>
                    </div>
                </div></Link>
                <Link href="/products/flex-fashion"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/4.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Flex Fashion</p>
                        <p>100$</p>
                    </div>
                </div></Link>
                <Link href="/products/raglan-shoes"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/5.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Raglan Shoes</p>
                        <p>50$</p>
                    </div>
                </div></Link>
                <Link href="/products/neon-push"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/6.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Neon Push</p>
                        <p>350$</p>
                    </div>
                </div></Link>
                <Link href="/products/snow-light"><div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/7.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Snow Light</p>
                        <p>50$</p>
                    </div>
                </div></Link>
            </section>
            <Footer />
        </>
    )
}

export default Page
