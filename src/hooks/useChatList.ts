"use client";
import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { fetchChatList } from "@/lib/api";
import { UserChatListItem } from "@/components/Layout/ChatList";

export function useChatList()
{
    const [isLoading, setIsLoading] = useState(true);
    const [data , setData] = useState<UserChatListItem[] | null>(null);
    const [error, setError] = useState<Error|null>(null);
    const {user} = useAuth();
    
    useEffect(() => {
        async function fetchData()
        {
            if(!user) {
                setError(new Error("Error: No User logged In"));
                setIsLoading(false);
                return;
            }
            
            try {
                setIsLoading(true);
                setError(null);
                const chatList = await fetchChatList(user.id);
                if(!chatList) {
                    throw new Error("Failed to get Chat List");
                }
                setData(chatList);
            }
            catch(e) {
                setError(e as Error);
            }
            finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, [user]);

    return {isLoading, data, error};
}