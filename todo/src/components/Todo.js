import React from 'react'

export const Todo = props => {
    console.log('consoled', props)
    const handleToggle = () => {
        props.dispatch({ type:'TOGGLE_COMPLETE', payload: props.id })
    }

    return(
        <h1 onClick={handleToggle} className={ props.state.completed ? ' completed' : '' }>
            {props.state.item}
        </h1>
    )
}