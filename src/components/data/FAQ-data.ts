export type faqDataProps = {
    value: string,
    accordionHeading: string,
    accordionDesc: string
}


export const faqData: faqDataProps[] = [
    {
        value: "item-1",
        accordionHeading: "What is Help4Paws ?",
        accordionDesc: "Help4Paws: Empowering animal welfare through compassion. Our NGO provides essential support, medical aid, and advocacy to improve animals' lives and promote kindness."
    },
    {
        value: "item-2",
        accordionHeading: "Will my donation reach Help4Paws directly ?",
        accordionDesc: `Don't worry your hard-earned money will directly react to us. You just have to choose between 2 subscriptions and then enter the required details of your card, etc. in the checkout, then your blessings for the animals will directly reflect in our account.`,
    },
    {
        value: "item-3",
        accordionHeading: "What are subscriptions avaliable ?",
        accordionDesc: "There are 2 subscription avaliable, one yearly that costs around $300/yr. and other monthly which costs around $30/mo."
    }
]