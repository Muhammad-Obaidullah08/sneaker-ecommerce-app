"useclient";
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Counter = () => {

    const [count, setcount] = useState(1)

    const Increment = () => {
        setcount(count + 1)
    }
    const Decrement = () => {
        setcount(count - 1)
    }


    return (
        <>
            <div className="flex justify-between items-center ml-10 my-10">
                <div>
                    <p className="font-bold text-xl sm:text-2xl">Quantity:</p>
                </div>
                <div className="flex justify-center items-center mr-5">
                    <Button className="mx-5 bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold text-lg" onClick={Decrement} disabled={count === 1}>-</Button>

                    <span className="text-lg text-sky-950 font-semibold">{count}</span>

                    <Button className="mx-5 bg-sky-950 hover:bg-sky-950 text-white hover:text-yellow-500 font-semibold text-lg" onClick={Increment}>+</Button>
                </div>
            </div>
        </>
    )
}

export default Counter