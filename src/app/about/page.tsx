import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <Navbar />

            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mt-10 uppercase text-sky-950">About Us</h1>
            </div>

            <section className="p-5 mb-20">
                <div className="flex justify-center items-center m-5">
                    <h3 className="font-bold text-lg lg:text-xl bg-sky-950 text-yellow-500 w-fit -skew-x-12 my-2 p-2">SneakerWorld</h3>
                </div>
                <div>
                    <div className="m-3">
                        <h2 className="font-bold text-2xl text-sky-950">Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, inventore. Illo laboriosam enim sit, repellat quod aut fugit assumenda adipisci ex soluta deserunt est eum maxime dolorum possimus perspiciatis at quos. Debitis praesentium ipsam corrupti beatae voluptas aspernatur eveniet odit a, iure optio reiciendis quod fuga nesciunt temporibus fugit! Quibusdam.</p>
                    </div>
                    <div className="m-3">
                        <h2 className="font-bold text-2xl text-sky-950">Our Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, excepturi molestias. Illo voluptates fugit recusandae omnis sequi laudantium odio officia, enim quam quis obcaecati provident, nobis cumque atque esse molestias sit! Corrupti, ut at aliquid aliquam in blanditiis fugit animi perspiciatis impedit suscipit voluptates, esse, dicta beatae eum quisquam soluta.</p>
                    </div>
                    <div className="m-3">
                        <h2 className="font-bold text-2xl text-sky-950">Our Specialities</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil exercitationem non deserunt, consequuntur doloribus illo quia veniam numquam ut minima possimus eligendi obcaecati impedit, earum error ipsum vitae ipsa reprehenderit tenetur? Delectus sequi nulla atque officiis doloribus quod. Facere, sequi deserunt. Temporibus eaque, aliquam incidunt aut quam esse ducimus ea.</p>
                    </div>
                </div>
                <Link href="/products"><Button className="mt-3 mx-3 bg-sky-950 hover:bg-sky-950 hover:text-yellow-500">See All Products</Button></Link>
            </section>

            <Footer />
        </>
    )
}

export default Page
