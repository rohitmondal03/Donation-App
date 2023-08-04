"use client"

import { redirect } from "next/navigation"
import Image from "next/image"

import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"


import { Props } from "./data/plans"
import Link from "next/link"


const Plans = (props: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl">{props.cardTitle}</CardTitle>
                <AspectRatio ratio={12 / 9} className="flex items-center justify-center">
                    <Image
                        src={props.imgSrc}
                        alt={`${props.cardTitle} image`}
                        height={500}
                        width={500}
                        className="rounded-2xl"
                    />
                </AspectRatio>
                <CardDescription className="text-[1.1rem]">{props.cardDesc}</CardDescription>
            </CardHeader>

            <CardContent>
                <Link href={props.link} legacyBehavior>
                    <a target="_blank">
                        <Button
                            variant={"link"}
                            className="border-zinc-900 border dark:border-zinc-400"
                        >
                            {props.cardTitle} link
                        </Button>
                    </a>
                </Link>
            </CardContent>
        </Card>
    )
}

export default Plans