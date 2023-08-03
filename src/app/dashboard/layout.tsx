import { Metadata } from "next"
import { ReactNode } from "react"


export const metadata: Metadata = {
    title: "Help4Paws | Dashboard"
}

const layout = (
    { children }: { children: ReactNode }
) => {
    return (
        <>
            {children}
        </>
    )
}

export default layout