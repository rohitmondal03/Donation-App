export type Props = {
    cardTitle: string
    cardDesc: string
    imgSrc: string
}

export const plansData: Props[] = [
    {
        cardTitle: "Yearly Plan",
        cardDesc: `"Empowering change through annual donations, fueling our NGO's impactful initiatives for a better tomorrow"`,
        imgSrc: "https://www.wildapricot.com/wp-content/uploads/2023/02/donation-button.png"
    },
    {
        cardTitle: "Monthly Plan",
        cardDesc: `"Transform lives consistently with our monthly donation system, driving sustained impact and positive change."`,
        imgSrc: "data:image/png;base64,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"
    }
] 