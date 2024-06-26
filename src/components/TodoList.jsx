import React from 'react'
import Todo from './Todo'
import '../App.css'
function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '90%', marginTop: '20px' }}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))
            }

        </div>
    )
}

export default TodoList