import React, { useState } from 'react'

function TaskForm({ addItem }) {

    const [text, setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(text) {
            addItem(text)
            setText('')
        }
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    return(
        <form className="task-form" onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text" 
                placeholder="What need to be done"
                value={text}
                onChange={(e) => handleChange(e)}
            />
            <button 
                id="btn-add" 
            >
                + New task
            </button>
        </form>
    )
}

export default TaskForm