const { createSlice, nanoid } = require("@reduxjs/toolkit");

const intialState = {
    todos:[ {id: 1, text: 'hello world'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    intialState,
    reducers: {
        addTodo: (state, action) => {
           const todo = {
            id: nanoid(),
            text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: () => {}
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer