import { SignUp } from "@clerk/nextjs"

const Register = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUp />
        </div>
    )
}

export default Register