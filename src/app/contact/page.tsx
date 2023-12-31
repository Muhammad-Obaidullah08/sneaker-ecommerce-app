import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/navbar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const Page = () => {
    return (
        <>
            <Navbar />

            <div className="text-center">
                <h1 className="font-bold text-3xl lg:text-4xl mt-10 uppercase text-sky-950">Contact Us</h1>
            </div>

            <section className="p-2 mt-10 mb-40 mx-5 lg:mx-10">
                <div>
                        <div className="my-5">
                            <Label htmlFor="name" className="ml-3 text-sky-950">Name</Label>
                            <Input type="text" id="name" placeholder="Name"
                                className="py-5" />
                        </div>
                        <div className="my-5">
                            <Label htmlFor="email" className="ml-3 text-sky-950">Email</Label>
                            <Input type="email" id="email" placeholder="Email" className="py-5" />
                        </div>
                        <div className="my-5">
                            <Label htmlFor="number" className="ml-3 text-sky-950">Number</Label>
                            <Input type="number" id="number" placeholder="Mobile Number" className="py-5" />
                        </div>
                        <div className="my-5">
                            <Label htmlFor="text" className="ml-3 text-sky-950">Address</Label>
                            <Input type="text" id="address" placeholder="Home Address" className="py-5" />
                        </div>
                </div>

                <div className="flex justify-center items-center m-5">
                    <Button className="cursor-pointer bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold">Submit</Button>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Page
