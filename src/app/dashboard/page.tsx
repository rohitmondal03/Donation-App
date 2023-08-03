import { plansData, Props } from "@/components/data/plans"
import Plans from "@/components/Plans"


const Dashboard = () => {
  return (
    <div className="text-center pt-36 flex items-center justify-center gap-x-24 sm:px-10 sm:gap-y-7 md:px-28  lg:flex-col lg:gap-y-12  2xl:px-20 3xl:px-28">
      {plansData.map((data: Props, index: number) => (
        <Plans
          key={index}
          {...data}
        />
      ))}
    </div>
  )
}

export default Dashboard