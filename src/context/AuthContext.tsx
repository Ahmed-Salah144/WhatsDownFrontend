"use client";
import { useState, useEffect } from "react";
import { AuthContext, AuthContextValue, User} from "@/lib/auth"
import Spinner from "@/components/Misc/Spinner";
export default function AuthProvider({ children }: {children:React.ReactNode})
{
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Check for stored token on mount
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                // Decode the mock JWT payload
                const payloadBase64 = token.split('.')[1];
                const payload = JSON.parse(atob(payloadBase64));
                
                // Check if token is expired
                if (payload.exp && payload.exp > Math.floor(Date.now() / 1000)) {
                    setUser({
                        id: payload.userId,
                        name: payload.name,
                        profileImageURL: payload.profileImageURL
                    });
                } else {
                    localStorage.removeItem('authToken');
                }
            } catch (error) {
                localStorage.removeItem('authToken');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async ( email: string, password:string) => {
        setIsLoading(true);
        const response = await fetch("/api/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
        });
        const data = await response.json();
        if(!response.ok)
        {
            console.log("Server Error")
            throw new Error ("Login Failed");
        }
        
        // Store token in localStorage
        localStorage.setItem('authToken', data.token);
        setUser(data.user);
        setIsLoading(false);
    }
    
    const logout = async () =>{
        setIsLoading(true);
        await fetch("/api/logout", { method: "POST" });
        localStorage.removeItem('authToken');
        setUser(null);
        setIsLoading(false);
    }
    
    const value: AuthContextValue = {
        user,
        isAuthenticated: !!user,
        login,
        logout
    }
    
    // Don't render children until we've checked for stored auth
    if (isLoading) {
        return <Spinner/>
    }
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}