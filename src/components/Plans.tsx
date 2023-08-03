"use client"

import Image from "next/image"

import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { Props } from "./data/plans"


const Plans = (props: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl">{props.cardTitle}</CardTitle>
                <AspectRatio ratio={15 / 9} className="flex items-center justify-center">
                    <Image
                        src={props.imgSrc}
                        alt="demo"
                        height={300}
                        width={300}
                    />
                </AspectRatio>
            </CardHeader>

            <CardContent>
                <CardDescription className="text-[1.1rem]">{props.cardDesc}</CardDescription>
                <Separator orientation="horizontal" className="h-[5px] my-3" />
                <Button>{props.cardTitle} link</Button>
            </CardContent>
        </Card>
    )
}

export default Plans