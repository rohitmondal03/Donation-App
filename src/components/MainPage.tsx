import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import FAQSection from "./FAQ"


const MainPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto text-center w-[400px] min-w-[200px] pt-36 px-12 sm:px-0">
            <Card>
                <CardHeader>
                    <CardTitle className="mb-3 text-[1.7rem] underline">Welcome to Help4Paws</CardTitle>
                    <CardDescription className="text-[1rem]">Website to donate to our NGO Help4Paws. We are a group, who aims at betterment of animals through you support. Donate us the amount and as per our subscription and join our  <span className="font-bold">&quot; movement for good &quot;</span> 🧑‍⚕️🧬</CardDescription>
                </CardHeader>

                <CardContent className="space-x-4">
                    <Separator orientation="horizontal" className="mb-5 h-[3px]" />

                    <Link href={`/sign-in`}>
                        <Button>Log In</Button>
                    </Link>

                    <Link href={`/sign-up`}>
                        <Button>Register</Button>
                    </Link>
                </CardContent>
            </Card>

            <Separator orientation="horizontal" className="h-1 w-[90vw] my-16" />

            <div className="mb-20">
                <h1 className="text-3xl mb-7">Frequently asked Questions</h1>
                <FAQSection />
            </div>
        </div>
    )
}

export default MainPage