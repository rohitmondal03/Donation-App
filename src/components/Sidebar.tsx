import Link from 'next/link'


import { SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'


const Sidebar = () => {
    return (
        <>
            <SheetHeader>
                <SheetTitle className='text-3xl mb-5'>Help4Paws</SheetTitle>
            </SheetHeader>
            <div className="py-4 flex flex-row items-center justify-center gap-x-5">
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
            </div>
        </>
    )
}

export default Sidebar