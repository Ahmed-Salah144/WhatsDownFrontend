'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-4">
            <h2 className="text-xl font-semibold text-primary">Something went wrong!</h2>
            <p className="text-text/80">{error.message}</p>
            <button
                onClick={reset}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
                Try again
            </button>
        </div>
    );
}
