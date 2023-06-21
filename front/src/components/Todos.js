import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getTodos } from '../services/TodoService';
import "../App.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
   let mounted = true;
   getTodos()
     .then(data => {
       if(mounted) {
         setTodos(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.todoId}</td>
                <td>{stu.name}</td>
                <td>{stu.details}</td>
                <td>{stu.status}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Todos;