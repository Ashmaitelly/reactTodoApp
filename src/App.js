import React,{useState, useEffect, createContext} from 'react';
import { TodoForm } from './component/TodoForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoList } from './component/TodoList'


export const TodoContext = createContext();

function App() {

  const [todos, setTodos] = useState([
    "Sample task"
  ]);

  const addTodo = text => {
    setTodos([...todos,text]);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index,value) => {
    const newTodos = [...todos];
    newTodos[index] = value
    setTodos(newTodos);
    console.log(value);

  };


  // useEffect(() => {  
  //   document.getElementById('remTasks').innerText = 
  //   `
  //   There ${(todos.length === 1) ? 'is': 'are'} ${todos.length} remaining task${(todos.length === 1) ? '': 's'} 
  //   `;
  // });

  
  return (
    <Router>
    <div>

        {/* <ExampleContext.Provider value={addTodo}>
          <TodoForm/>
        </ExampleContext.Provider>

      <div id='tasksLIst' className='container'>
      <h3 id='remTasks' className="text-center" ></h3>
      {todos.map((todo,index) => (
        <TodoContext.Provider value={[todo,index, removeTodo,editTodo]}>
          <TodoItem key={todo} />
        </TodoContext.Provider>
        ))}
      </div>  */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">To do list</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">View Tasks</Link>
            </li>
          </ul>
        </div>
      </nav>
      <TodoContext.Provider value={[todos, addTodo, removeTodo, editTodo]}>
      <Route path="/" exact component={TodoForm} />
      <Route path="/list" component={TodoList} />
      </TodoContext.Provider>
    </div>
  </Router>
  );
}
export default App;
