import React,{useState, useContext}  from 'react';
import { TodoContext } from '../App';
import { Card, Button} from 'react-bootstrap';
import { ItemContext } from './TodoList';


export function TodoItem() {

  // 2 remove , 3 edit
  const todos=useContext(TodoContext);
  //hide show boolean
  const item =useContext(ItemContext);
  const [edit, setEdit] = useState(false);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!value) return;
  //   add(value);
  //   setValue("");
  //   return true;
  // };

    return (
      <div className="mt-2 mb-2">
        <Card>
          <Card.Body>
            <div className="item">
              <div>
                <span style={{ display: edit ? "none" : "" }}>{todos[0][item]}</span>
                <input 
                id={item}
                type="text" 
                style={{ display: edit ? "" : "none" }} 
                defaultValue={todos[0][item]}
                >
                </input>
              </div>
              <div>
              {/* Buttons to show when not editing */}
              <Button variant="outline-primary" style={{ display: edit ? "none" : "" }} onClick={() => setEdit(!edit)}> Edit</Button>{' '}
              <Button variant="outline-success" style={{ display: edit ? "none" : "" }} onClick={() => todos[2](item)}>Finish</Button>
              {/* Buttons to show when editing */}
              <Button variant="outline-danger" style={{ display: edit ? "" : "none" }} onClick={() => setEdit(!edit)}> Cancel</Button>{' '}
              <Button variant="outline-success" style={{ display: edit ? "" : "none" }} 
              onClick={() => {
                setEdit(!edit)
                todos[3](item, (document.getElementById(item).value))
              }
              }>Edit</Button>
              </div>
            </div>
            </Card.Body>
         </Card>
      </div>
    );
  }

