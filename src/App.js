import React, { useEffect } from 'react';
import {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from "uuid";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import todoImg from './assets/Todo.png';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  //retrieving 
  useEffect(()=> {
    const todoJSON= localStorage.getItem('todo');
    const retrievedTodos = JSON.parse(todoJSON);
    if(retrievedTodos.length > 0){
      setTodos(retrievedTodos);
    }
  },[])
  // setting
  useEffect(() => {
    const todoJSON = JSON.stringify(todos);
    localStorage.setItem('todo', todoJSON)
  }, [todos])

  const handleInputChange = (e) => {
    console.log(e.target.id)
    if(e.target.id === 'todo-add-input'){
      setTodo(e.target.value)
    }else{
      setEditTodo(e.target.value)
    }
  }
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if(e.target.id === 'todo-add-form'){
      const newTodo = {
        id : uuidv4(),
        todoText:todo,
        isCompleted:false,
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }else{
      const updateTodos = [...todos].map((todo) => {
        if(todo.id === editTodoId){
          return {...todo, todoText: editTodo}
        }
        return todo;
      });
      setTodos(updateTodos)
      setEditTodoId(null)
      setEditTodo("")
    }
    
    
  }
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(updatedTodos)
  }

  const completeTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        return {...todo, isCompleted : !todo.isCompleted}
      }
      return todo;
    });
    setTodos(updatedTodos)

  }

  const toggleEditMode = (id) => {
    const todo = [...todos].find((todo) => {
      return todo.id === id
    })
    setEditTodoId(id);
    setEditTodo(todo.text);
  }

  return (
    <div className='appContainer'>
     <div className='app-img-container'>
        <img src={todoImg} alt='todolist' className='app-img' />
      </div>
     <TodoForm 
     id='todo-add' 
     type='text' 
     btnText='Add' 
     value={todo} 
     onChange={handleInputChange} 
     onSubmit={handleInputSubmit}/>
    
    <TodoList 
     todos={todos} 
     editTodo={editTodo}
     editTodoId={editTodoId}
     removeTodo={removeTodo} 
     completeTodo={completeTodo} 
     toggleEditMode={toggleEditMode}
     onChange={handleInputChange} 
     onSubmit={handleInputSubmit} />
    </div>
  );
}

export default App;
