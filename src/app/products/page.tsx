import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/navbar"
import Image from "next/image"

const page = () => {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mt-10 uppercase text-sky-950">Our Products</h1>
            </div>

            <section className="flex flex-wrap justify-center items-center my-10">
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/1.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Green Mesh sol</p>
                        <p>500$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/2.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Red Sneakers</p>
                        <p>450$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/3.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Yellow Sneakers</p>
                        <p>550$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/4.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Flex Fashion</p>
                        <p>300$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/5.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Raglan Shoes</p>
                        <p>250$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/6.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Neon Push</p>
                        <p>750$</p>
                    </div>
                </div>
                <div className="m-5 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700">
                    <Image src="/images/7.webp" alt="products" width={200} height={200} className="rounded-t-sm"></Image>
                    <div className="bg-slate-200 text-center rounded-b-sm py-2">
                        <p className="font-bold text-xl text-sky-950">Snow Light</p>
                        <p>200$</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page
