import DetailSection from "@/components/sections/detail/DetailSection";
import { Suspense } from "react";

export default function DetailPage() {
    return (
        <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white">Loading...</div>}>
            <DetailSection/>
        </Suspense>
    );  
}