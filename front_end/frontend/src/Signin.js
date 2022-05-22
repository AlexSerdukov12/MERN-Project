import React from 'react'
import './Signin.css'
import {useState} from 'react'
import Axios from 'axios'
import { Homepage } from './homepage'
import {setLogin} from './App'
import { useNavigate } from 'react-router-dom'

export function Signin(props) {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
    const history = useNavigate()
    function passVariablesToBackend () {
      console.log('Sending request to backend')
      Axios.post('http://localhost:5001/login', {
        email_data: Email,
        password_data: Password
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        var element = document.getElementById('test')
        element.innerText = res.data
        if(res.data ) {
          element.style.background = 'green'
          console.log("here user  = "+ res.data)
          props.setuser(res.data)
          history('/')
                    ///// לעבור לדף הבית כמחובר  ---- ככה לעשות?? ג
                              ///// שמירה של המשתמש 
         // window.location.href = "http://localhost:3000";
            } 

         else {
          element.style.background = 'red'
        }
  
      }).catch(err => {
        console.log(err);
      })
    }
    return (
        <div className="App">
      <input value={Email} type="email" placeholder='Email' onChange={event => {setEmaildData(event.target.value)}} ></input>
      <input value={Password} type="password" placeholder='Password' onChange={event => {setPasswordData(event.target.value)}} ></input>
      <button onClick={() => {passVariablesToBackend()}}>Press here</button>
      <div id='test' >
        
      </div>
    </div>

  );
}

