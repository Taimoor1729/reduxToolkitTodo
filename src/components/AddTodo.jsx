import { react, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/TodoSlice';

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        console.log(input)
        dispatch(addTodo(input))
        setInput('')
    }

    return(
        <form onSubmit={addTodoHandler} className='space'>
<input type="text" placeholder='Enter a todo' value={input} onChange={(e) => setInput(e.target.value)} />
<button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodo