import React from 'react'
import Todo from '../Todo/Todo'
import './TodoList.css'

function TodoList({ todos, removeTodo, completeTodo, toggleEditMode, editTodo, editTodoId, onChange, onSubmit }) {
    const renderTodos = () => {
        if (todos.length > 0) {
            return todos.map((todo) => {
                return <Todo key={todo.id}
                    editTodo={editTodo}
                    editTodoId={editTodoId}
                    todo={todo}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                    toggleEditMode={toggleEditMode}
                    onChange={onChange} 
                    onSubmit={onSubmit} />
            })
        } else {
            return <p className='errMessage'>There are no Todos!</p>
        }

    }
    return (
        <div className='todoList-container'>{renderTodos()}</div>
    )
}

export default TodoList