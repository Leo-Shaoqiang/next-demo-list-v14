'use client'

import { useRef, useOptimistic, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { createToDo } from './actions';

export function SubmitButton() {
    const state = useFormStatus()

    useEffect(() => {
        function handler(e) {
            if (!state.pending) return;
            e.preventDefault();
        }

        window.addEventListener("beforeunload", handler);

        return () => {
            window.removeEventListener("beforeunload", handler);
        }
    }, [state.pending])

    return (
        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            添加任务
        </button>
    )
}

export default function ToDoList({ todos }) {
    const formRef = useRef(null);

    const [optimisticToDoList, addOptimistic] = useOptimistic(todos.map((i) => ({ text: i })), (currentState, optimisticValue) => {
        return [
            ...currentState,
            {
                text: optimisticValue,
                sending: true
            }
        ]
    }
    );

    return (
        <div className="p-10">
            <form className="space-y-6" ref={formRef} action={async (formData) => {
                addOptimistic(formData.get("todo"))
                formRef.current?.reset()
                const res = await createToDo(formData)
                if (res?.error) {
                    alert('任务添加失败！请重新添加！')
                }
            }}>
                <div>
                    <label htmlFor="todo" className="block text-sm font-medium leading-6 text-gray-900">
                        添加一项任务列表
                    </label>
                    <div className="mt-2">
                        <input id="todo" name="todo" type="todo" required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                        />
                    </div>
                </div>
                <SubmitButton />
            </form>
            <ul role="list" className="divide-y divide-gray-100 list-decimal mt-4 list-inside">
                {optimisticToDoList.map(({ text, sending }, i) => (
                    <li key={i} className="py-2">
                        {text} {!!sending && <small> (Adding...)</small>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
