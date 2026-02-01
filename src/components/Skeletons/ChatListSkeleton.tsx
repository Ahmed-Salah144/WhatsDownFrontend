export default function ChatListSkeleton() {
    return (
        <div className="h-screen py-6 overflow-y-auto bg-primaryBg border-l border-r border-secondaryBg w-85 md:w-115 lg:70">
            {/* Header skeleton */}
            <div className="px-5">
                <div className="h-6 w-32 bg-secondaryBg rounded animate-pulse"></div>
            </div>

            {/* Chat items skeleton */}
            <div className="mt-8 space-y-1">
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="flex items-center gap-3 px-5 py-3 border-b border-secondaryBg">
                        {/* Avatar skeleton */}
                        <div className="relative flex-shrink-0">
                            <div className="w-14 h-14 bg-secondaryBg rounded-full animate-pulse"></div>
                            <div className="h-3 w-3 rounded-full bg-secondaryBg absolute right-0 ring-2 ring-primaryBg bottom-0"></div>
                        </div>

                        {/* Content skeleton */}
                        <div className="flex-1 min-w-0 space-y-2">
                            {/* Name and timestamp row */}
                            <div className="flex items-center justify-between gap-2">
                                <div className="h-4 bg-secondaryBg rounded w-24 animate-pulse"></div>
                                <div className="h-3 bg-secondaryBg rounded w-12 animate-pulse"></div>
                            </div>
                            
                            {/* Last message row */}
                            <div className="flex items-center justify-between gap-2">
                                <div className="h-3 bg-secondaryBg rounded w-40 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
