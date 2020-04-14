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
            //every time we hit add todo this new object will pop up
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return [...state, newTodo]

        case 'TOGGLE_COMPLETE':
            return state.map(item => {
               return item.id === action.payload ? {
                    ...item, completed: !item.completed } : item
            }) 

        case 'REMOVE_COMPLETE':
            return state.filter(item => !item.completed)

        default:
            return state
    }
}