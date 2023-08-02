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
            {faqData.map((values: faqDataProps) => (
                <AccordionItem value={values.value}>
                    <AccordionTrigger>{values.accordionHeading}</AccordionTrigger>
                    <AccordionContent>
                        {values.accordionDesc}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
