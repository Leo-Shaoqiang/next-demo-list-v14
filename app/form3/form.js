'use client'

import { useActionState } from "react";
import { createToDo } from './actions';

export default function AddToDoForm() {
  const [state, formAction, isPending] = useActionState(createToDo, '')

  return (
    <form action={formAction} className="flex flex-col gap-y-2 mb-2">
      <input type="text" name="todo" className="px-4 py-2 rounded shadow-sm ring-1 ring-inset ring-gray-300" />
      <button type="submit" disabled={isPending} className="bg-indigo-600 disabled:bg-gray-500 py-2 rounded text-white">
        {isPending ? 'Adding' : 'Add'}
      </button>
      {state && <p>{state}</p>}
    </form>
  )
}
