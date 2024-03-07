import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo, fetchTodos1 } from '../../store/slice/todoSlice'

const Index = () => {
  const [currentTodo, setCurrentTodo] = useState('')
  const [todoToBeEditedId1, setTodoToBeEditedId] = useState(null)
  const dispatch = useDispatch()

  const { todoList, todoListFromApi, loading } = useSelector(state => state.todo)
  

  console.log("todolistfrom api",todoListFromApi)
  const handleAddTodo = () => {
    dispatch(addTodo(currentTodo))
    setCurrentTodo('')
  }

  const handleDeleteTodo = (todoId) =>{
    dispatch(deleteTodo(todoId))
  }

  const handleUpdateTodo = (todo) =>{
    setCurrentTodo(todo.title)
    setTodoToBeEditedId(todo.id)

    
  }

  const handleEditTodo = () =>{
    dispatch(editTodo({
      todoToBeEditedId1,
      currentTodo
    }))  

    setCurrentTodo('')
  }

  const fetchApiTodos = () =>{
    dispatch(fetchTodos1())
  }

  useEffect(() => {
    dispatch(fetchTodos1())
  }, [])
  

  if(loading){
    return (
      <p>Fetching todos...</p>
    )
  }
  return (
    <div>
      <input value={currentTodo} onChange={(event) => setCurrentTodo(event.target.value)} type="text" name="todo" placeholder='Enter your todo' />
      <button disabled={currentTodo === ''} onClick={todoToBeEditedId1 ? handleEditTodo : handleAddTodo}>{todoToBeEditedId1 ? 'Edit todo': 'Add Todo'}</button>

      <ul>
        {
          todoList && todoList.length > 0 ?
          todoList.map(todo => (
            <div key={todo.id}>
            <li >
              {todo.title}
            </li>
            <button onClick={handleDeleteTodo.bind(null,todo.id)}>delete</button>
            <button onClick={()=>handleUpdateTodo(todo)}>update</button>
            </div>
          )): null 
        }

      </ul>
      <button onClick={fetchApiTodos}>Fetch api</button>
      {
        todoListFromApi && todoListFromApi.length > 0 ? todoListFromApi.map((todo) => (
          <ul>
            <li key={todo.id}>{todo.todo}</li>
          </ul>
        )) :
        null
      }
    </div>
  )
}
export default Index