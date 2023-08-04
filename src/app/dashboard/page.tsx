import { plansData, Props } from "@/components/data/plans"
import Plans from "@/components/Plans"


const Dashboard = () => {
  return (
    <div className="text-center py-36 flex items-center justify-center flex-col px-12 gap-y-10 md:flex-row md:gap-x-12 md:px-20">
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