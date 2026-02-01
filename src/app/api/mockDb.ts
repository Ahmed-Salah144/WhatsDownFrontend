// Mock database with 5 user accounts
export interface MockUser {
    id: string;
    name: string;
    email: string;
    password: string;
    profileImageURL: string;
    isOnline: boolean;
}

export const mockUsers: MockUser[] = [
    {
        id: "user-1",
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "Alice123!",
        profileImageURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        isOnline: true
    },
    {
        id: "user-2",
        name: "Bob Smith",
        email: "bob@example.com",
        password: "Bob456!",
        profileImageURL: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
        isOnline: false
    },
    {
        id: "user-3",
        name: "Carol Davis",
        email: "carol@example.com",
        password: "Carol789!",
        profileImageURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
        isOnline: true
    },
    {
        id: "user-4",
        name: "David Wilson",
        email: "david@example.com",
        password: "David012!",
        profileImageURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        isOnline: false
    },
    {
        id: "user-5",
        name: "Emma Brown",
        email: "emma@example.com",
        password: "Emma345!",
        profileImageURL: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
        isOnline: true
    }
];

export function findUserByEmail(email: string): MockUser | undefined {
    return mockUsers.find(user => user.email === email);
}

export function findUserById(id: string): MockUser | undefined {
    return mockUsers.find(user => user.id === id);
}

export function isEmailTaken(email: string): boolean {
    return mockUsers.some(user => user.email === email);
}

// Generate chat list for a user (exclude self, add mock conversation data)
export function generateChatListForUser(userId: string) {
    return mockUsers
        .filter(user => user.id !== userId)
        .map((user, index) => ({
            id: user.id,
            name: user.name,
            imageUrl: user.profileImageURL,
            isOnline: user.isOnline,
            lastMessage: [
                "Hey! How are you doing?",
                "See you tomorrow!",
                "Thanks for your help!",
                "Let's catch up soon",
            ][index % 4],
            timestamp: [
                "10:30 AM",
                "9:15 AM",
                "Yesterday",
                "Monday"
            ][index % 4],
            unreadCount: index === 0 ? 2 : 0
        }));
}
