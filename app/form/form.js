'use client'

import { useState } from 'react';
import { createToDo } from './actions';

export default function AddToDoForm() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await createToDo(todo);
    setIsPending(false);
    if (error) {
      setError(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 mb-2">
      <input type="text" name="todo" className="px-4 py-2 rounded shadow-sm ring-1 ring-inset ring-gray-300" value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button type="submit" disabled={isPending} className="bg-indigo-600 disabled:bg-gray-500 py-2 rounded text-white" onClick={handleSubmit} >
        {isPending ? 'Adding' : 'Add'}
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}
