'use client';

import { useState } from 'react';
import ModalIcon from './ModalIcon';

interface ChatViewProps {
    user: {
        id: number;
        name: string;
        imageUrl: string;
        isOnline: boolean;
    };
}

export default function ChatView({ user }: ChatViewProps) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hey! How are you?', sender: 'them', time: '10:30 AM' },
        { id: 2, text: 'I\'m good! Thanks for asking.', sender: 'me', time: '10:32 AM' },
        { id: 3, text: 'What are you up to today?', sender: 'them', time: '10:33 AM' },
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: message,
                sender: 'me',
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-secondaryBg flex-1 min-w-0">
            {/* Chat Header */}
            <div className="flex items-center gap-4 px-6 py-2 border-b border-secondaryBg bg-primaryBg">
                <div className="relative">
                    <img
                        src={user.imageUrl}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    {user.isOnline && (
                        <span className="h-3 w-3 rounded-full bg-primary absolute right-0 ring-2 ring-primaryBg bottom-0"></span>
                    )}
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-semibold text-text">{user.name}</h2>
                    <p className="text-sm text-text/60">
                        {user.isOnline ? 'Online' : 'Offline'}
                    </p>
                </div>
                <div className="flex gap-2">
                    <ModalIcon
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        }
                        modalTitle="Coming Soon"
                    >
                        <p className="text-text/80">This feature is coming soon!</p>
                    </ModalIcon>
                    {/* <button className="p-2 text-text/60 hover:text-text hover:bg-secondary rounded-lg transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button> */}
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-2xl text-text ${
                                msg.sender === 'me'
                                    ? 'bg-secondary'
                                    : 'bg-primaryBg'
                            }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                            <p className="text-xs mt-1 text-text/60">
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <form
                onSubmit={handleSendMessage}
                className="px-2 py-1 border-t mb-3 mx-4 border-secondaryBg bg-primaryBg rounded-full shadow-2xl"
            >
                <div className="flex items-center gap-2">
                    <ModalIcon
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        }
                        modalTitle="Coming Soon"
                    >
                        <p className="text-text/80">This feature is coming soon!</p>
                    </ModalIcon>
                    <ModalIcon
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                        }
                        modalTitle="Coming Soon"
                    >
                        <p className="text-text/80">This feature is coming soon!</p>
                    </ModalIcon>

                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-3 bg-primaryBg text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-text/40"
                    />
                    <button
                        type="submit"
                        className="p-3  bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
