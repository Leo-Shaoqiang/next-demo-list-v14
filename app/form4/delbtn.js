'use client'

import { useActionState } from "react";
import { deleteTodo } from './actions';

export default function DeleteBtn({id}) {
  const [state, action, isPending] = useActionState(deleteTodo, null)

  return (
    <button 
      disabled={isPending}
      onClick={() => {  
        action(id)
      }}
      className="bg-indigo-600 disabled:bg-gray-500 py-2 rounded text-white px-2 ml-2">
      {isPending ? 'Deleting' : 'Delete'} {state}
    </button>
  )
}
