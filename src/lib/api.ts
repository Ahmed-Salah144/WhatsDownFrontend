import { timeStamp } from "console";
import z from "zod"
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
        const data = userChatListSchema.parse(rawData);
        return data;
    }
    catch(e)
    {
        console.log(e);
        console.log("Failed to get chat list");
        return null;
    }
    
}
