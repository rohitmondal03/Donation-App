import { SignIn } from "@clerk/nextjs"

const LogIn = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignIn />
        </div>
    )
}

export default LogIn