"use client"
import {registerSchema,registerData} from "@/lib/auth"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import InputField from "../FormFields/InputField"
import Button from "../FormFields/Button"
import Link from "next/link"
import { sendRegisterRequest } from "@/lib/api"
import { useState } from "react"

export default function RegisterForm()
{
    const [serverError, setServerError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    
    const {register, handleSubmit, formState} =useForm<registerData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        mode:"onSubmit",
        reValidateMode: "onSubmit"
    });
    
    const onSubmit = async (data: registerData) => {
        setServerError("");
        setSuccessMessage("");
        
        try
        {
            const result = await sendRegisterRequest(
                data.username,
                data.email,
                data.password,
                data.confirmPassword
            );
            
            setSuccessMessage(result.message || "Registration successful!");
            console.log("Registration successful", result);
        }
        catch (err)
        {
            if (err instanceof Error) {
                setServerError(err.message);
            } else {
                setServerError("An unexpected error occurred");
            }
            console.log("Registration failed:", err);
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 shadow-lg p-3 justify-center rounded-lg my-4 mx-4 bg-secondaryBg/60 ">
            <h1 className="text-primary py-1 px-1"> Create a Whatsdown Account</h1>
            
            {serverError && (
                <div className="mx-3 mt-2 p-2 bg-primary/20 border border-primary rounded text-primary text-sm">
                    {serverError}
                </div>
            )}
            
            {successMessage && (
                <div className="mx-3 mt-2 p-2 bg-primary/20 border border-primary rounded text-primary text-sm">
                    {successMessage}
                </div>
            )}
            
            <InputField fieldname= "username" type="text" label ="Username" register={register}></InputField>
            <span className="text-primary">{formState.errors.username? formState.errors.username.message : " " }</span>
            <InputField fieldname= "email" type="email" label ="Email" register={register}></InputField>
            <span className="text-primary">{formState.errors.email? formState.errors.email.message : " " }</span>
            <InputField fieldname= "password" type="password" label ="Password" register={register}></InputField>
            <span className="text-primary">{formState.errors.password? formState.errors.password.message : " " }</span>
            <InputField fieldname= "confirmPassword"type="password" label ="Confirm Password" register={register}></InputField>
            <span className="text-primary">{formState.errors.confirmPassword? formState.errors.confirmPassword.message : " " }</span>
            <div className="flex w-full pt-1 px-4 mb-1 mx-auto justify-center">
                <div className="flex text-sm text-primary py-1 justify-center">
                    <Link href="/login/"className="justify-center">Already Have An Account? Sign In Here</Link> 
                </div>
            </div>
            <Button label = "Create Account"></Button>
        </form>
    )
}