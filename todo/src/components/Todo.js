import React from 'react'

export const Todo = props => {
    return(
        <h1 onClick={(e) => {
            e.preventDefault()
            props.handleComplete(props.state.id)
            e.target.classList.toggle('change')
        }}>
            {props.state.item}
        </h1>
    )
}