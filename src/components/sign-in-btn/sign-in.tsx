import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const SignIn = () => {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="secondary" className="hidden sm:block cursor-pointer text-sky-95 font-semibold 2xl:text-lg 2xl:h-12">Sign In</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="ml-2">Sign In
                            <p className="font-normal text-sm text-gray-500">To Continue To SneakerWorld</p></AlertDialogTitle>
                        <AlertDialogDescription>
                            <div className="grid w-full max-w-lg gap-1.5">
                                <div className="m-2">
                                    <Label htmlFor="name" className="font-semibold ">Name</Label>
                                    <Input type="name" id="name" placeholder="Enter Your Username" className="mt-1" /></div>
                                <div className="m-2">
                                    <Label htmlFor="email" className="font-semibold">Email</Label>
                                    <Input type="email" id="email" placeholder="Enter Your Email" className="mt-1" /></div>
                                <div className="m-2">
                                    <Label htmlFor="password" className="font-semibold">Password</Label>
                                    <Input type="password" id="password" placeholder="Enter Your Password" className="mt-1" /></div>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-sky-950 hover:bg-sky-950 hover:text-yellow-500">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default SignIn
