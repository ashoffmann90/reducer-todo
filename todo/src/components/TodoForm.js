import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'
import { Todo } from './Todo'

function TodoForm() {
    const [newTodo, setNewTodo] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChanges = e => {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: newTodo })
    }

    const handleClear = e => {
        e.preventDefault()
        dispatch({ type: 'REMOVE_COMPLETE' })
    }

    return (
        <div>
            <form>
                <input
                type='text'
                name='newTodo'
                value={newTodo}
                onChange={handleChanges}
                />
            </form>
            <button type='submit' onClick={handleSubmit}>
                Add Todo
            </button>
            <button type='submit' onClick={handleClear}>
                Clear
            </button>
            <div>
                {state.map(item => (
                    <Todo 
                    state={item}
                    dispatch={dispatch}
                    id={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoForm

