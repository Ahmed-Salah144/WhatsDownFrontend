"use client";
import { useState, useEffect } from "react";
import { AuthContext, AuthContextValue, User} from "@/lib/auth"
import Spinner from "@/components/Misc/Spinner";
import { sendLoginRequest ,sendLogoutRequest} from "@/lib/api";
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
        try{
            const data = await sendLoginRequest(email,password);
            localStorage.setItem('authToken', data.token);
            setUser(data.user);
        }
        catch(e)
        {
            console.log("Login Failed:", e);
            // Re-throw the error so the component can handle it
            throw e;
        }
    }
    
    const logout = async () =>{
        try{
            setIsLoading(true);
            if(!user)
                throw new Error("No User Logged in")
            await sendLogoutRequest(user.id);
            localStorage.removeItem('authToken');
            setUser(null);
        }
        catch(e)
        {
            console.log("Logout Failed")
            console.log(e);
        }
        finally
        {
            setIsLoading(false);   
        }
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