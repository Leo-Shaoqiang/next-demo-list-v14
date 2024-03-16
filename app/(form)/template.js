'use client'

import { Suspense } from "react";
import { useState, useEffect } from "react";

function Loading() {
    return <div className="h-10 mt-5 mb-2 flex-1 rounded-xl bg-sky-500 text-white flex items-center justify-center">Loading</div>
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function CustomComponent() {
    await sleep(1000)
    return <div className="h-10 mt-5 mb-2 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">Hello, Template!</div>
}

export default function Template({ children }) {

    const [text, setText] = useState('');

    const [animation, setAnimation] = useState('fadeOut');

    useEffect(() => {
        console.log('count page view')
        setAnimation("fadeIn")
    }, [])

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <CustomComponent />
            </Suspense>
            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                在这里随意输入一些内容：
            </label>
            <div className="mt-2">
                <input
                    id="text"
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={text} onChange={e => setText(e.target.value)}
                />
            </div>
            <div className={`section ${animation}`}>
                {children}
            </div>
        </div>
    )
}
