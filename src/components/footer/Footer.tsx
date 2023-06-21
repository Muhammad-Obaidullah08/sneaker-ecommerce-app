import Image from "next/image"

const Footer = () => {
    return (
        <>
            <div className="flex flex-col text-center justify-center items-center">
                <div>
                    <h3 className="font-bold text-lg bg-sky-950 text-yellow-500 w-fit -skew-x-12 my-2 p-2">SneakerWorld</h3>
                </div>
                <div>
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                    </p>
                </div>
                <div className="flex justify-start my-3">
                    <Image src="/images/facebook.png" alt="logo" width={30} height={35} className="mr-1"></Image>
                    <Image src="/images/twitter.png" alt="logo" width={30} height={35} className="mr-1"></Image>
                    <Image src="/images/linkedin.png" alt="logo" width={30} height={35} className="mr-1"></Image>
                </div>
            </div>
            <section className="flex flex-wrap m-3 p-2 flex-col sm:flex-row sm:justify-evenly">
                <div className="flex flex-col m-2 p-1">
                    <div>
                        <h3 className="font-bold">Company</h3>
                    </div>
                    <div>
                        <ul className="list-none">
                            <li>About</li>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                            <li>How it Works</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col m-2 p-1">
                    <h3 className="font-bold">Support</h3>
                    <ul>
                        <li>Support Care</li>
                        <li>24h Service</li>
                        <li>Support 24h</li>
                    </ul>
                </div>
                <div className="flex flex-col m-2 p-1">
                    <h3 className="font-bold">Contact</h3>
                    <ul>
                        <li>Whatsapp</li>
                        <li>Quick Chat</li>
                    </ul>
                </div>
            </section>

            <footer className="flex p-5 border-t-2 border-gray-400 justify-around">
                <div className="text-xs font-semibold w-full text-center">
                    <p>Copyright &copy; 2023 Sneaker World</p>
                </div>
                <div className="text-xs w-full text-center">
                    <p>Design By:<strong>Usman Ashraf</strong></p>
                </div>
                <div className="text-xs w-full text-center">
                    <p>Coded By: <strong>Muhammad Obaidullah</strong></p>
                    <a href="https://github.com/Muhammad-Obaidullah08/sneaker-ecommerce-app" target="_blank" className="font-bold hover:underline">View On Github</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
