import React,{useContext}  from 'react';
import { Form, Button} from 'react-bootstrap';
import { TodoContext } from '../App';


export function TodoForm (){

    const add=useContext(TodoContext);
    
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      add[1](value);
      setValue("");
      return true;
    };
  
    return (
    <div id ='container' className="container">
      <h1 className="text-center mb-4">To-do List</h1>
      <Form onSubmit={handleSubmit}> 
        <Form.Group>
          <Form.Label><b>Add Task</b></Form.Label>
          <Form.Control type="text" className="input mb-2" value={value} onChange={e => setValue(e.target.value)} />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">Submit</Button>
      </Form>
    </div>
    );
  }