import React, {createContext, useContext, useEffect} from "react";
import { TodoItem } from './TodoItem';
import { TodoContext } from "../App";


export const ItemContext = createContext();

export function TodoList() {

  const todos=useContext(TodoContext);

  useEffect(() => {  
    document.getElementById('remTasks').innerText = 
    `
    There ${(todos[0].length === 1) ? 'is': 'are'} ${todos[0].length} remaining task${(todos[0].length === 1) ? '': 's'} 
    `;
  });

  return (
   
    <div id='taskList' className="container">
      <h3 id='remTasks' className="text-center" ></h3>
      {todos[0].map((todo,index) => (
        <ItemContext.Provider value={[index]}>
          <TodoItem key={index} />
        </ItemContext.Provider>
        ))}
      
    </div>
  );
}