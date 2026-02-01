import z from "zod"
import { userSchema } from "./auth";
const userChatListSchema= z.array(z.object(
    {
        id: z.string(),
        name: z.string(),
        lastMessage: z.string().optional(),
        timestamp: z.string().optional(),
        imageUrl: z.string().optional(),
        isOnline: z.boolean(),
        unreadcont: z.number().optional()
    })
)
const loginResponseScehma=z.object({
    user: userSchema,
    token: z.string()
})

const registerResponseSchema = z.object({
    success: z.boolean(),
    message: z.string().optional()
})

const errorResponseSchema = z.object({
    error: z.string()
})
export async function fetchChatList(userId: string)
{
    try
    {
        const response= await fetch("/api/chatList",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: userId})
        });
        
        const rawData = await response.json();
        
        if(!response.ok)
        {
            const errorData = errorResponseSchema.parse(rawData);
            throw new Error(errorData.error);
        }
        
        const data = userChatListSchema.parse(rawData);
        return data;
    }
    catch(e)
    {
        console.log(e);
        if(e instanceof Error) {
            throw e;
        }
        throw new Error("Failed to parse chat list");
    }
}
export async function sendLoginRequest(email:string, password:string)
{
    try
    {
        const response= await fetch("/api/login",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password})
        });
        
        const rawData = await response.json();
        
        if(!response.ok)
        {
            const errorData = errorResponseSchema.parse(rawData);
            throw new Error(errorData.error);
        }
        
        const data = loginResponseScehma.parse(rawData);
        return data;
    }
    catch(e)
    {
        if(e instanceof Error) {
            throw e; // Re-throw with the actual error message
        }
        throw new Error("Failed to parse login response");
    }
}

export async function sendRegisterRequest(username: string, email: string, password: string, confirmPassword: string)
{
    try
    {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, confirmPassword })
        });
        
        const rawData = await response.json();
        
        if(!response.ok)
        {
            const errorData = errorResponseSchema.parse(rawData);
            throw new Error(errorData.error);
        }
        
        const data = registerResponseSchema.parse(rawData);
        return data;
    }
    catch(e)
    {
        if(e instanceof Error) {
            throw e; // Re-throw with the actual error message
        }
        throw new Error("Failed to parse register response");
    }
}
export async function sendLogoutRequest(userId: string)
{

    const response= await fetch("/api/logout",{
    method:"POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: userId})
    });
    if(!response.ok)
        throw new Error("Server Error on Log out")

}