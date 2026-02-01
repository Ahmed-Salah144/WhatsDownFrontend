"use client"
import { useState } from "react";
import ChatList from "@/components/Layout/ChatList";
import ChatView from "@/components/Layout/ChatView";
import ChatListSkeleton from "@/components/Skeletons/ChatListSkeleton";
import ChatViewSkeleton from "@/components/Skeletons/ChatViewSkeleton";
import { useChatList } from "@/hooks/useChatList";

export default function HomeContent() {
    const [selectedUser, setSelectedUser] = useState<string>("0");
    const { isLoading, data: users, error } = useChatList();

    // Show loading state while fetching
    if (isLoading) {
        return (
            <>
                <ChatListSkeleton />
                <ChatViewSkeleton />
            </>
        );
    }

    // Throw error to be caught by error.tsx
    if (error) {
        throw error;
    }

    if (!users || users.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <p className="text-text/60">No chats available</p>
            </div>
        );
    }

    const selectedUserData = users.find(u => u.id === selectedUser);
    return (
        <>
            <ChatList
                users={users}
                selectedUserId={selectedUser}
                onUserClick={setSelectedUser}
            />
            {selectedUserData && <ChatView user={selectedUserData} />}
        </>
    );
}
