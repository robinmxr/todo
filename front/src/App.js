import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Todos from "./components/Todos";
import Manage from './components/Manage';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
    return (
        <BrowserRouter>
        <Navigation />
        <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/todos" element={<Todos/>} />
         <Route path="/manage" element={<Manage/>} />
       </Routes>
        </BrowserRouter>

    );
}

export default App;