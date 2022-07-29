import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Todo.css'
import TodoForm from '../TodoForm/TodoForm';

function Todo({ todo, removeTodo, completeTodo, toggleEditMode, editTodo, editTodoId, onChange, onSubmit }) {
    return (
        <div className='todo-container'>
            <input className='todo-checkbox' type='checkbox' onClick={() => completeTodo(todo.id)} checked={todo.isCompleted} />
            {todo.id === editTodoId ? (<TodoForm 
                id='todo-edit'
                type='text'
                btnText='Update'
                value={editTodo}
                onChange={onChange}
                onSubmit={onSubmit}                     
                />) : (
                <div className='todo-text-btn'>
                    <p className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
                        {todo.todoText}
                    </p>
                    <div className='todo-btn'>
                        <button className='btn-group' onClick={() => toggleEditMode(todo.id)}>
                            <FontAwesomeIcon icon={faEdit} className='icon' />
                        </button>
                        <button className='btn-group' onClick={() => removeTodo(todo.id)}>
                            <FontAwesomeIcon icon={faTrash} className='icon' />
                        </button>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Todo