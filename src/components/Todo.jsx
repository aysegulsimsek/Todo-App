import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'
function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content)
    const removeTodo = () => {
        onRemoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditable(false)
    }
    return (
        <div>
            <div className='todo'>
                <div>
                    {
                        editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className='todo_input' /> : content
                    }
                </div>
                <div className='todo_icons'>
                    <IoMdCloseCircleOutline className='once_icon' style={{ cursor: 'pointer' }} onClick={removeTodo} />
                    {
                        editable ? <FaCheck className='second_icon' style={{ cursor: 'pointer' }} onClick={updateTodo} /> : <FaPen className='third_icon' style={{ cursor: 'pointer' }} onClick={() => setEditable(true)} />
                    }
                </div>
            </div>
        </div>
    )
}
//  
export default Todo