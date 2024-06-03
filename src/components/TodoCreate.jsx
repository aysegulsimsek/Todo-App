import React, { useState } from 'react'
import '../App.css'


function TodoCreate({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {

            id: Math.floor(Math.random() * 99999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();

    }

    return (
        <div className='todo_create'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                className='todo_input' type="text" placeholder='Todo giriniz.' />
            <button onClick={createTodo} className='todo_btn'>To Do Oluştur</button>
        </div>
    )
}

export default TodoCreate