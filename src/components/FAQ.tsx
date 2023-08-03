import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { faqData, faqDataProps } from "./data/FAQ-data"


export default function FAQSection() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqData.map((values: faqDataProps, index: number) => (
                <AccordionItem value={values.value} key={index}>
                    <AccordionTrigger>{values.accordionHeading}</AccordionTrigger>
                    <AccordionContent>
                        {values.accordionDesc}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
