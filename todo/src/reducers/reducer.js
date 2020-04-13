import React, { useReducer } from 'react'

export const initialState = [{
        item: 'study',
        completed: false,
        id: Date.now(),
  }]

console.log(initialState)

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            //every time we hit submit this new object will pop up
            const newTodo = {
                item: '',
                completed: false,
                id: Date.now(),
            }

        case 'TOGGLE_COMPLETE':
            return {
                
            }
        case 'REMOVE_TODO':
            return {
                
            }
        default:
            return state
    }
}