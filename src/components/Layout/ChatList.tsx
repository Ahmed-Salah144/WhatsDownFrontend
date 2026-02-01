import SideBarElement from './SideBarElement';

export interface UserChatListItem {
    id: string;
    name: string;
    lastMessage?: string;
    timestamp?: string;
    imageUrl?: string;
    isOnline: boolean;
    unreadCount?: number;
}

interface ChatListProps {
    users: UserChatListItem[];
    selectedUserId: string;
    onUserClick: (userId: string) => void;
}

export default function ChatList({ users, selectedUserId, onUserClick }: ChatListProps) {

    return (
        <div className="h-screen py-6 overflow-y-auto bg-primaryBg border-l border-r border-secondaryBg w-85 md:w-115 lg:70 custom-scrollbar">
            <h1 className="px-5 text-lg font-large font-semibold text-primary">WhatsDown</h1>

            <div className="mt-8 space-y-1">
                {users.map((user) => (
                    <SideBarElement
                        key={user.id}
                        name={user.name}
                        lastMessage={user.lastMessage}
                        timestamp={user.timestamp}
                        imageUrl={user.imageUrl}
                        isOnline={user.isOnline}
                        isSelected={selectedUserId === user.id}
                        unreadCount={user.unreadCount}
                        onClick={() => onUserClick(user.id)}
                    />
                ))}
            </div>
        </div>
    );
}
