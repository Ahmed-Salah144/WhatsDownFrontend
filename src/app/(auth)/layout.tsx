"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function authlayout({children}:{children:React.ReactNode})
{
    const router = useRouter();
    const {isAuthenticated} = useAuth();
    useEffect(()=>{
        if(isAuthenticated)
            router.replace("/");
    },[isAuthenticated, router]
    )
    return (
    <div>
        {children}
    </div>
    )
}