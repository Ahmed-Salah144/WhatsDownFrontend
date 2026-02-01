interface SideBarElementProps {
    name: string;
    lastMessage?: string;
    timestamp?: string;
    imageUrl?: string;
    isOnline?: boolean;
    isSelected?: boolean;
    unreadCount?: number;
    onClick?: () => void;
}

export default function SideBarElement({
    name,
    lastMessage,
    timestamp,
    imageUrl="",
    isOnline = false,
    isSelected = false,
    unreadCount = 0,
    onClick
}: SideBarElementProps) {
    return (
        <div className="mx-3">
        <button
            onClick={onClick}
            className={`flex items-center w-full px-3 py-2.5 transition-colors duration-200 gap-x-2 focus:outline-none rounded-2xl ${
                isSelected ? 'bg-secondaryBg/40' : 'hover:bg-secondaryBg/40'
            }`}
        >
            <div className="relative">
                <img
                    className="object-cover w-14 h-14 rounded-full"
                    src={imageUrl}
                    alt={name}
                />
                {isOnline && (
                    <span className="h-3 w-3 rounded-full bg-primary absolute right-0.5 ring-1 ring-primaryBg bottom-0"></span>
                )}
            </div>

            <div className="text-left rtl:text-right flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <h1 className="text-large font-semibold text-text capitalize truncate">{name}</h1>
                    {timestamp && (
                        <span className="text-xs text-text/60 flex-shrink-0">{timestamp}</span>
                    )}
                </div>
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm text-text/60 truncate">{lastMessage || 'No messages yet'}</p>
                    {unreadCount > 0 && (
                        <span className="flex-shrink-0 bg-primary text-primaryBg text-xs font-semibold rounded-full h-5 min-w-[20px] px-1.5 flex items-center justify-center">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )}
                </div>
            </div>
        </button>
        </div>
    );
}
