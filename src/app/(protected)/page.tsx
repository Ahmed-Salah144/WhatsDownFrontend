import { Suspense } from "react";
import HomeContent from "@/components/Layout/HomeContent";
import Spinner from "@/components/Misc/Spinner";

export default function HomePage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center h-screen w-full">
                <Spinner />
            </div>
        }>
            <HomeContent />
        </Suspense>
    );
}