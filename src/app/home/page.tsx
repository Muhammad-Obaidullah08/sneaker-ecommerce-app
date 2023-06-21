import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <section className="home flex flex-col md:flex-row my-5 lg:mt-24 px-10">
                <div className="left flex flex-col md:w-1/2 md:mt-8">
                    <div className="text flex flex-col w-11/12 mx-auto items-center md:items-start">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-fit">Discover The</h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-sky-950 text-yellow-500 w-fit -skew-x-12 my-2 p-2">Perfect</h2>
                        <h2 className="text-3xl sm:text-4xl font-bold w-fit md:text-5xl lg:text-6xl">Shoes</h2>
                        <p className="text-base sm:text-lg text-slate-600 my-5">Shop our latest collection of premium shoes designed for comfort and style.</p>
                    </div>
                    <div className="button flex justify-between px-4 w-full mt-8">
                        <Button className="sm:hidden cursor-pointer bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold justify-start">Sign In</Button>
                        <Link href="/products"><Button className="cursor-pointer bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold justify-end sm:p-5">Shop Now</Button></Link>
                    </div>
                </div>
                <div className="image flex md:w-1/2 justify-center">
                    <Image src="/images/sneaker-image.png" alt="sneaker-image" width={320} height={320} className="bg-yellow-500 md:bg-transparent rounded-full h-80 sm:h-96 lg:h-[32rem] w-80 sm:w-96 lg:w-[32rem] mt-5 md:mt-0 mx-auto absolute z-10"></Image>
                    <div className="hidden md:block bg-yellow-500 rounded-full -z-10 md:h-64 md:w-64 mx-auto mt-12 lg:mt-16 lg:h-80 lg:w-80 "></div>
                </div>
            </section>

            <div className="text-center mt-96 mb-10 sm:mt-[27rem] md:mt-0 lg:mt-48">
                <h1 className="font-bold text-4xl m-4 uppercase">Promotions</h1>
                <h5 className="font-bold text-base text-blue-600">Our Promotion Events</h5>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                <div className="first flex flex-col justify-center item-center h-[37.5rem] lg:h-[35rem] space-y-3">
                    <div className="bg-gray-500 px-10 text-center flex justify-center items-center w-72 flex-col h-[35rem] mx-auto my-5 lg:my-1 lg:mt-10 py-5 ">
                        <div className="flex flex-col">
                            <Image src="/images/promotion3-image.png" alt="promotion-image" width={100} height={100} className="w-72 h-52 mx-auto"></Image>
                            <h1 className="font-bold text-4xl text-white my-3 lg:my-1">Casual Sneakers</h1>
                            <div className="flex flex-row w-full my-2 lg:my-1 text-center items-center">
                                <h4 className="line-through text-2xl text-white w-1/2">600$</h4>
                                <h4 className="text-4xl font-bold text-yellow-500 w-1/2">300$</h4>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex bg-gray-900 w-72 mx-auto p-10 lg:px-5 lg:py-2 text-center my-5 lg:my-0 items-center flex-col">
                        <h1 className="text-white uppercase font-bold text-4xl my-4 lg:my-2">Get 30% Off</h1>
                        <h5 className="text-white uppercase text-lg my-4 lg:my-1">Use Promo Code</h5>
                        <h4 className="text-yellow-500 uppercase font-bold text-4xl my-4 lg:my-1">OSM-2045</h4>
                    </div>
                </div>

                <div className="second bg-slate-300 px-10 text-center flex justify-center items-center w-72 flex-col mx-auto my-5 py-5 h-[35rem]">
                    <Image src="/images/promotion-image.jpg" alt="promotion-image" width={100} height={100} className="w-72 h-52 lg:h-60 mx-auto"></Image>
                    <h1 className="font-bold text-4xl my-3">For The Summer Season</h1>
                    <div className="flex flex-row w-full my-2 text-center items-center">
                        <h4 className="line-through text-2xl w-1/2">500$</h4>
                        <h4 className="text-4xl font-bold text-sky-950 w-1/2">250$</h4>
                    </div>
                </div>
                <div className="third bg-sky-200 px-10 text-center flex justify-center items-center w-72 flex-col mx-auto my-5 py-5 h-[35rem]">
                    <Image src="/images/promotion2-image.jpg" alt="promotion-image" width={100} height={100} className="w-72 h-52 lg:h-60 mx-auto"></Image>
                    <h1 className="font-bold text-4xl my-3">Light And Soft</h1>
                    <div className="flex flex-row w-full my-2 text-center items-center">
                        <h4 className="line-through text-2xl w-1/2">400$</h4>
                        <h4 className="text-4xl font-bold text-sky-950 w-1/2">200$</h4>
                    </div>
                </div>

                <div className="bg-gray-900 w-72 h-72 sm:h-[35rem] mx-auto p-5 text-center my-5 items-center lg:hidden">
                    <h1 className="text-white uppercase font-bold text-4xl sm:text-5xl my-4 sm:my-10">Get 30% Off</h1>
                    <h5 className="text-white uppercase text-lg sm:text-xl my-4 sm:my-5">Use Promo Code</h5>
                    <h4 className="text-yellow-500 uppercase font-bold text-4xl my-4 sm:my-5">OSM-2045</h4>
                </div>
            </section>

            <div className="text-center mt-14 mb-10 md:mt-0 lg:mt-32">
                <h1 className="font-bold text-4xl m-4 uppercase">Products</h1>
                <h5 className="font-bold text-base text-blue-600">Check What We Have</h5>
            </div>

            <section className="product flex flex-col justify-center items-center sm:flex-row">
                <div className="image1 flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700 p-5 sm:w-1/3">
                    <Image src="/images/product-image.png" alt="product-image" width={300} height={448} className="mx-3 mt-3 w-11/12 h-80 md:h-96 lg:h-[28rem] rounded-t-sm"></Image>
                    <div className="lower-text bg-slate-300 flex flex-col justify-center items-center w-11/12 rounded-b-sm p-3 text-center">
                        <h3 className="font-bold text-lg">Best Casual Sneakers</h3>
                        <p>500$</p>
                    </div>
                </div>
                <div className="image2 flex flex-col justify-center items-center transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-700 p-5 sm:w-1/3">
                    <Image src="/images/product1-image.png" alt="product-image" width={300} height={448} className="mx-3 mt-3 w-11/12 h-80 md:h-96 lg:h-[28rem] rounded-t-sm"></Image>
                    <div className="lower-text bg-slate-300 flex flex-col justify-center items-center w-11/12 rounded-b-sm p-3 text-center">
                        <h3 className="font-bold text-lg">Men Sneakers</h3>
                        <p>400$</p>
                    </div>
                </div>
                <div className="image3 flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-700 p-5 sm:w-1/3">
                    <Image src="/images/product2-image.png" alt="product-image" width={300} height={448} className="mx-3 mt-3 w-11/12 h-80 md:h-96 lg:h-[28rem] rounded-t-sm"></Image>
                    <div className="lower-text bg-slate-300 flex flex-col justify-center items-center w-11/12 rounded-b-sm p-3 text-center">
                        <h3 className="font-bold text-lg">Skechers Men Go Walk</h3>
                        <p>250$</p>
                    </div>
                </div>
            </section>

            <section className="hidden md:flex bg-slate-200 mt-20 p-3">
                <div className="grid grid-rows-2 grid-cols-2 gap-2 p-2 w-1/3">
                    <div className="m-2 h-40">
                        <h3 className="font-bold text-lg">Using Good Quality Materials</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="m-2 h-40">
                        <h3 className="font-bold text-lg">100% Handmade Products</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="m-2 h-40">
                        <h3 className="font-bold text-lg">Modern Fashion Design</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="m-2 h-40">
                        <h3 className="font-bold text-lg">Discount for Bulk Orders</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="flex p-3 w-1/3">
                    <Image src="/images/last-image.jpg" alt="last image" width={400} height={400}></Image>
                </div>
                <div className="flex flex-col justify-center items-center p-3 text-center w-1/3">
                    <div className="p-2">
                        <h2 className="font-bold text-2xl text-sky-950">Unique and Authentic Vintage Designer Products</h2>
                    </div>
                    <div className="p-2">
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    </div>
                    <Link href="/products"><Button className="mt-3 bg-sky-950 hover:bg-sky-950 hover:text-yellow-500">See All Products</Button></Link>
                </div>
            </section>

            <section className="flex justify-center items-center my-40">
                <div className="news py-10 -z-10 absolute">
                    <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sky-950 opacity-10">Newsletter</h1>
                </div>
                <div className="subs z-10 absolute flex flex-col justify-center items-center mt-16 text-center my-3">
                    <h2 className="font-bold text-2xl sm:text-3xl text-sky-950 my-2">Subscribe To Our Newsletter</h2>
                    <p className="font-semibold">Get the latest information and promo offers directly</p>
                    <div className="my-5 p-1 flex ">
                        <Input type="email" placeholder="Enter Your Email" />
                        <Button type="submit" className="bg-sky-950 hover:bg-sky-950 hover:text-yellow-500 ml-2 sm:ml-3">Subscribe
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default HomePage
