import React, {useState, useReducer} from 'react'
import {initialState, reducer} from '../reducers/reducer'

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
        </div>
    )
}

export default TodoForm



// import React, {useState, useReducer} from 'react'

// const TodoForm = (props) => {

//     const [newTodoText, setNewTodoText] = useState('')


//     const handleChanges = e => {
//         setNewTodoText(e.target.value)
//     }

//     const submitItem = e => {
//         e.preventDefault()
//         setNewTodoText(e.target.value)
//     }

//     return (
//         <div>
//             <form onSubmit={submitItem}>
//                 <input
//                     type='text'
//                     name='newTodoText'
//                     value={newTodoText}
//                     onChange={handleChanges}
//                 />
//                 <button>
//                     Add Todo
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default TodoForm