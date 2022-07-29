import React from 'react';
import './TodoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faSave } from '@fortawesome/free-solid-svg-icons'

function TodoForm({ id, type, btnText, value, onChange, onSubmit }) {
    return (
        <form id={`${id}-form`} onSubmit={(e) => onSubmit(e)}>
            <div>
                <input
                    id={`${id}-input`}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e)}
                    required
                />

                <span className='highlight'></span>
                <span className='bar'></span>
                <label className='todoForm-label' htmlFor={id}>
                    {id === "todo-add" ? "Todo:" : ""}
                </label>
            </div>
            <button id={`${id}-btn`} className='form-submit-btn' type='submit'>
                {btnText === "Add" ? (
                    <FontAwesomeIcon icon={faAdd} className='btn-icon-add' />
                ) : (
                    <FontAwesomeIcon icon={faSave} className='btn-icon-save' />
                )}
            </button>
            {/* <button id={`${id}-btn`} className='form-submit-btn' type='submit'>
                <FontAwesomeIcon icon={faAdd} className='btn-icon-add' />
            </button> */}
        </form>
    )
}

export default TodoForm