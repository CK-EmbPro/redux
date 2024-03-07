import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  resetUsername, updateUsername } from '../redux/username/userActions'

const Username = () => {
    const username = useSelector(state => state.usernameReducer.username)
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const update = ()=>{
        const newUsername = inputRef.current.value

        dispatch(updateUsername(newUsername))
        inputRef.current.value = ""
    }

    const clear = ()=>{
       dispatch(resetUsername())
    }
  
  return (
    <div>
        <h1>username is: {username}</h1>
        <input ref = {inputRef} type="text" />
        <button onClick={update}>Update</button>
        <button onClick={clear}>Clear</button>
    </div>

  )
}

export default Username