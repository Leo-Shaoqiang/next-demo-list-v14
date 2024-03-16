import Link from "next/link";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'

function Loading() {
    return <div className="h-10 mt-5 mb-2 flex-1 rounded-xl bg-sky-500 text-white flex items-center justify-center">Loading</div>
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function CustomComponent() {
    await sleep(1000)
    return <div className="h-10 mt-5 mb-2 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">Hello, Layout!</div>
}

export default function RootLayout({ children }) {
    return (
        <div className="p-5">
            <nav className="flex items-center justify-center gap-10 text-blue-600">
                <Link href="/about">About</Link>
                <Link href="/settings">Settings</Link>
            </nav>
            <Suspense fallback={<Loading />}>
                <CustomComponent />
            </Suspense>
            {children}
        </div>
    );
}
