export default function ChatViewSkeleton() {
    return (
        <div className="flex flex-col h-screen bg-secondaryBg flex-1 min-w-0">
            {/* Chat Header Skeleton */}
            <div className="flex items-center gap-4 px-6 py-2 border-b border-secondaryBg bg-primaryBg">
                {/* Avatar skeleton */}
                <div className="relative">
                    <div className="w-12 h-12 bg-secondaryBg rounded-full animate-pulse"></div>
                    <span className="h-3 w-3 rounded-full bg-secondaryBg absolute right-0 ring-2 ring-primaryBg bottom-0"></span>
                </div>
                
                {/* Name and status skeleton */}
                <div className="flex-1 space-y-2">
                    <div className="h-5 bg-secondaryBg rounded w-32 animate-pulse"></div>
                    <div className="h-4 bg-secondaryBg rounded w-16 animate-pulse"></div>
                </div>
                
                {/* Action buttons skeleton */}
                <div className="flex gap-2">
                    <div className="w-10 h-10 bg-secondaryBg rounded-lg animate-pulse"></div>
                </div>
            </div>

            {/* Messages Area Skeleton */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {/* Message from them */}
                <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md space-y-2">
                        <div className="h-16 bg-primaryBg rounded-2xl animate-pulse w-64"></div>
                    </div>
                </div>

                {/* Message from me */}
                <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md space-y-2">
                        <div className="h-20 bg-primaryBg rounded-2xl animate-pulse w-56"></div>
                    </div>
                </div>

                {/* Message from them */}
                <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md space-y-2">
                        <div className="h-12 bg-primaryBg rounded-2xl animate-pulse w-48"></div>
                    </div>
                </div>

                {/* Message from me */}
                <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md space-y-2">
                        <div className="h-16 bg-primaryBg rounded-2xl animate-pulse w-52"></div>
                    </div>
                </div>

                {/* Message from them */}
                <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md space-y-2">
                        <div className="h-14 bg-primaryBg rounded-2xl animate-pulse w-60"></div>
                    </div>
                </div>
            </div>

            {/* Message Input Skeleton */}
            <div className="px-2 py-1 border-t mb-3 mx-4 border-secondaryBg bg-primaryBg rounded-full">
                <div className="flex items-center gap-2 py-2 px-2">
                    {/* Icon buttons skeleton */}
                    <div className="w-8 h-8 bg-secondaryBg rounded-lg animate-pulse"></div>
                    <div className="w-8 h-8 bg-secondaryBg rounded-lg animate-pulse"></div>
                    
                    {/* Input skeleton */}
                    <div className="flex-1 h-10 bg-secondaryBg rounded-lg animate-pulse"></div>
                    
                    {/* Send button skeleton */}
                    <div className="w-10 h-10 bg-secondaryBg rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
