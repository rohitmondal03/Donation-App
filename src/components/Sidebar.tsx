import Link from 'next/link'

import { UserButton, currentUser } from '@clerk/nextjs'

import { MoveLeft } from "lucide-react"

import { SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'

type Props = {}

const Sidebar = () => {
    const user = currentUser();


    return (
        <>
            <SheetHeader>
                <SheetTitle className='text-3xl mb-5'>Help4Paws</SheetTitle>
            </SheetHeader>
            <div className="py-4 flex flex-row items-center justify-center gap-x-5">
                {!user ? (
                    <>
                        <Link
                            href={"/sign-in"}
                            className="grid grid-cols-4 items-center gap-4"
                            legacyBehavior
                        >
                            <a target='_blank'>
                                <Button>
                                    Log In
                                </Button>
                            </a>
                        </Link>

                        <Link
                            href={"/sign-up"}
                            className="grid grid-cols-4 items-center gap-4"
                            legacyBehavior
                        >
                            <a target='_blank'>
                                <Button>
                                    Register
                                </Button>
                            </a>
                        </Link>
                    </>
                ) : (
                    <div className='flex flex-row items-center justify-center gap-x-3 border-2 border-red-400 px-9 py-3 rounded-2xl'>
                        <UserButton afterSignOutUrl='/' />
                        <MoveLeft />
                        <p>Click Here</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Sidebar