import { findToDos } from './actions';
import AddToDoForm from './form';

export default async function Page() {
  const todos = await findToDos();
  return (
    <div className="p-4">
      <AddToDoForm />
      <ul className='list-decimal list-inside'>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  )
}
