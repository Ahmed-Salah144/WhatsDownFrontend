"use client"
import RegisterForm from "@/components/Auth/RegisterForm"
export default function registerPage()
{
    return (
    <div className="flex h-screen flex-col items-center justify-center bg-primaryBg">
        <RegisterForm>
        </RegisterForm>
    </div>
    )
}