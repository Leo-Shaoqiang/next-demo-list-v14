'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createToDo } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className="bg-indigo-600 disabled:bg-gray-500 py-2 rounded text-white">
      {pending ? 'Adding' : 'Add'}
    </button>
  )
}

export default function AddToDoForm() {
  const [state, formAction] = useFormState(createToDo, '')
  return (
    <form action={formAction} className="flex flex-col gap-y-2 mb-2">
      <input type="text" name="todo" className="px-4 py-2 rounded shadow-sm ring-1 ring-inset ring-gray-300" />
      <SubmitButton />
      {state && <p>{state}</p>}
    </form>
  )
}
