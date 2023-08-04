import Link from "next/link"

import { UserButton, currentUser, auth } from "@clerk/nextjs"

import { MenuIcon } from "lucide-react"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "./Sidebar"


const Navbar = async () => {
    const user = await currentUser();

    return (
        <nav className="flex flex-row items-center justify-around py-5 fixed inset-x-0 border-b-2 border-zinc-600 backdrop-blur-3xl z-10 px-2 sm:px-0">
            <Link href={`/`}>
                <h1 className="text-3xl hover:underline cursor-pointer">Help4Paws</h1>
            </Link>

            <div className="flex flex-row items-center gap-x-5">
                <ThemeToggle />

                <div className="hidden sm:block space-x-1">
                    {!user ? (
                        <>
                            <Link href={`/sign-up`}>
                                <Button>
                                    Register
                                </Button>
                            </Link>

                            <Link href={`/sign-in`}>
                                <Button>
                                    Log In
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <UserButton afterSignOutUrl="/" />
                    )}
                </div>


                <div className="block sm:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <MenuIcon size={20} className="mt-2" />
                        </SheetTrigger>

                        <SheetContent side={`right`}>
                                <Sidebar />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar