"use client"
import { useState } from "react";
import ChatList from "@/components/Layout/ChatList";
import ChatView from "@/components/Layout/ChatView";

export default function HomePage()
{
    const [selectedUser, setSelectedUser] = useState<number>(2);

    const users = [
        { id: 0, name: 'Mia John', lastMessage: 'Hey! How are you doing?', timestamp: '10:30 AM', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100', isOnline: false, unreadCount: 0 },
        { id: 1, name: 'Arthur Melo', lastMessage: 'See you tomorrow!', timestamp: '9:15 AM', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80', isOnline: false, unreadCount: 2 },
        { id: 2, name: 'Jane Doe', lastMessage: 'Thanks for your help!', timestamp: '8:45 AM', imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100', isOnline: true, unreadCount: 0 },
        { id: 3, name: 'Amelia. Anderson', lastMessage: 'Let\'s catch up soon', timestamp: 'Yesterday', imageUrl: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80', isOnline: false, unreadCount: 5 },
        { id: 4, name: 'Joseph Gonzalez', lastMessage: 'Perfect! Thanks', timestamp: 'Yesterday', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80', isOnline: false, unreadCount: 0 },
        { id: 5, name: 'Olivia Wathan', lastMessage: 'That sounds great!', timestamp: 'Monday', imageUrl: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80', isOnline: true, unreadCount: 1 },
        { id: 6, name: 'Junior REIS', lastMessage: 'I\'ll send the files over', timestamp: 'Sunday', imageUrl: 'https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80', isOnline: true, unreadCount: 0 },
        { id: 7, name: 'Mia John', lastMessage: 'Looking forward to it', timestamp: 'Saturday', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100', isOnline: false, unreadCount: 12 },
        { id: 8, name: 'Arthur Melo', lastMessage: 'Got it, thanks!', timestamp: 'Friday', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80', isOnline: false, unreadCount: 0 },
        { id: 9, name: 'Jane Doe', lastMessage: 'See you there!', timestamp: 'Thursday', imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100', isOnline: true, unreadCount: 0 },
        { id: 10, name: 'Amelia. Anderson', lastMessage: 'Absolutely!', timestamp: 'Wednesday', imageUrl: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=80', isOnline: false, unreadCount: 0 },
        { id: 11, name: 'Joseph Gonzalez', lastMessage: 'Sounds good to me', timestamp: 'Tuesday', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80', isOnline: false, unreadCount: 100 },
        { id: 12, name: 'Olivia Wathan', lastMessage: 'Can\'t wait!', timestamp: 'Monday', imageUrl: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=1470&q=80', isOnline: true, unreadCount: 0 },
        { id: 13, name: 'Junior REIS', lastMessage: 'Have a great day!', timestamp: 'Last week', imageUrl: 'https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&h=687&q=80', isOnline: true, unreadCount: 0 },
    ];

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