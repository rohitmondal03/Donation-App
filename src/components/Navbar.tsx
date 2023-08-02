import Link from "next/link"

import { UserButton, currentUser, auth } from "@clerk/nextjs"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"


const Navbar = async () => {
    const user = await currentUser();

    return (
        <nav className="flex flex-row items-center justify-around py-5 fixed inset-x-0 border-b-2 border-zinc-600 backdrop-blur-2xl">
            <Link href={`/`}>
                <h1 className="text-3xl hover:underline cursor-pointer">Help4Paws</h1>
            </Link>

            <div className="flex flex-row items-center gap-x-3">
                <ThemeToggle />

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
        </nav>
    )
}

export default Navbar