"use client"
import LoginForm from "@/components/Auth/LoginForm"
export default function loginPage()
{
    return (
    <div className="flex h-screen flex-col items-center justify-center bg-primaryBg">
        <LoginForm>
        </LoginForm>
    </div>
    )
}