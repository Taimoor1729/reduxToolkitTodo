import { react } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/TodoSlice';

function Todos() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    return (
        <>
            <div>todos</div>
            {todos?.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}>
                        X
                    </button>
                </li>
            ))}
        </>
    )
}

export default Todos