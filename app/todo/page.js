import { findToDos } from './actions';
import ToDoList from './todo';

export default async function Page() {
    const todos = await findToDos();
    return (
        <ToDoList todos={todos} />
    )
}
