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
        if(!response.ok)
        {
            console.log("Server Error")
            throw new Error ("Server Error, fetching chat list failed");
        }
        const rawData = await response.json();
        const data = userChatListSchema.parse(rawData);
        return data;
    }
    catch(e)
    {
        console.log(e);
        console.log("Failed to parse Chat List");
        return null;
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
        if(!response.ok)
        {
            console.log("Server Error")
            throw new Error ("Login Failed");
        }
        const rawData = await response.json();
        const data = loginResponseScehma.parse(rawData);
        return data;
    }
    catch(e)
    {
        console.log(e);
        console.log("Failed to parse login response");
        return null;
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