import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import {Menu} from './MenuNavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from './homepage';
import { Signin } from './Signin';
import { Signup } from './Signup';


function App() {
const [user,setuser]=useState(null)
  return (

<BrowserRouter>
     <Routes>
        <Route path='/' element={<Homepage user={user} setuser={setuser} />} />
        <Route path='/signin' element={<Signin user={user} setuser={setuser} />} />
        <Route path='/signup' element={<Signup user={user} setuser={setuser} />}  />
     </Routes>
</BrowserRouter>
 
  );
}



export default App;

