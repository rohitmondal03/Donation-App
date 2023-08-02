import { redirect } from "next/navigation";

import { currentUser } from "@clerk/nextjs"

import MainPage from "@/components/MainPage";

export default async function page() {
  const user = await currentUser();

  if (!user) {
    return (
      <MainPage />
    )
  } else {
    return redirect('/dashboard')
  }
}