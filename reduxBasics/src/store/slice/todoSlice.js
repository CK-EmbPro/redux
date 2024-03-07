import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos1 = createAsyncThunk('fetchTodos', async () =>{
    const response = await fetch('https://dummyjson.com/todos', {
        method: 'GET',
    })
    const result = await response.json()
    // console.log("result", result)
    return result
})

const initialState = {
    todoList: [],
    loading: false,
    todoListFromApi: [],
    isError: false
}

const todoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newlyCreatedTodo = {
                id: state.todoList.length ===0 ? 1 : state.todoList.length +1,
                title: action.payload
            }

            state.todoList.push(newlyCreatedTodo);

            return state
        },

        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload)

            return state
        },

        editTodo: (state, action) => {
            console.log(action)
            let todos = state.todoList
            let todoToBeUpdatedId = todos.findIndex((item) => item.id === action.payload.todoToBeEditedId1)

            todos[todoToBeUpdatedId] = {
                ...todos[todoToBeUpdatedId],
                title: action.payload.currentTodo
            }            

            state.todoList = todos

            return state
        }
       
    },
    extraReducers: (builder)=>{
        builder
        .addCase( fetchTodos1.pending, (state, action) => {
            state.loading = true
        })
        .addCase( fetchTodos1.fulfilled, (state, action) =>{

            state.loading = false;
            state.todoListFromApi = action.payload.todos;
        })
        .addCase( fetchTodos1.rejected, (state, action) =>{
            state.loading = false
            state.isError = true
            console.log("rejected")
            
        })
        .addDefaultCase((state, action) =>{
            console.log("default extra case");
        })
    }
})

export const { addTodo, deleteTodo, editTodo } = todoReducer.actions
export default todoReducer.reducer  