import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getTodos, deleteTodo } from '../services/TodoService';
import AddTodoModal from "./AddTodoModal";
import UpdateTodoModal from "./UpdateTodoModal";


const Manage = () => {
    const [todos, setTodos] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editTodo, setEditTodo] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditTodo(stu);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    
    const handleDelete = (e, todoId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteTodo(todoId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Todo");
            })
        }
    };


    useEffect(() => {
        let mounted = true;
        if(todos.length && !isUpdated) {
         return;
         }
        getTodos()
          .then(data => {
            if(mounted) {
              setTodos(data);
            }
          })
        return () => {
           mounted = false;
           setIsUpdated(false);
        }
      }, [isUpdated, todos])

      let AddModelClose=()=>setAddModalShow(false);
      let EditModelClose=()=>setEditModalShow(false);
      return(
          <div className="container-fluid side-container">
          <div className="row side-row" >
          <p id="manage"></p>
              <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                  <thead>
                  <tr>
                    <th >ID</th>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    { todos.map((stu) =>
      
                    <tr key={stu.id}>
                    <td>{stu.todoId}</td>
                    <td>{stu.name}</td>
                    <td>{stu.details}</td>
                    <td>{stu.status}</td>
                    <td>
      
                    <Button className="mr-2" variant="danger"
                      onClick={event => handleDelete(event,stu.todoId)}>
                          <RiDeleteBin5Line />
                    </Button>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <Button className="mr-2"
                      onClick={event => handleUpdate(event,stu)}>
                          <FaEdit />
                    </Button>
                    <UpdateTodoModal show={editModalShow} todo={editTodo} setUpdated={setIsUpdated}
                                onHide={EditModelClose}></UpdateTodoModal>
                  </td>
                  </tr>)}
                </tbody>
              </Table>
              <ButtonToolbar>
                  <Button variant="primary" onClick={handleAdd}>
                  Add Todo
                  </Button>
                  <AddTodoModal show={addModalShow} setUpdated={setIsUpdated}
                  onHide={AddModelClose}></AddTodoModal>
              </ButtonToolbar>
          </div>
          </div>
      );
};

export default Manage;