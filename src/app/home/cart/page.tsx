import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/Footer"

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mt-10 uppercase text-sky-950">Your Cart</h1>
            </div>

            <div className="flex justify-center items-center my-40">
                <h3 className="font-semibold text-3xl">Coming Soon.....</h3>
            </div>
            <Footer />
        </>
    )
}

export default Page
