import React from 'react'
import './Signin.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Axios from 'axios'
export function Signup(props) {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
    const history = useNavigate()

    function passVariablesToBackend () {
      console.log('Sending request to backend')
      Axios.post('http://localhost:5001/register', {
        email_data: Email,
        password_data: Password
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        
        var element = document.getElementById('test')
        element.innerText = res.data
        if(res.data==true) {
          props.setuser(res.data)
          history('/')
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
      <input value={Password} onChange={event => {setPasswordData(event.target.value)}} type="password" placeholder='Password'></input>
    
      <button onClick={() => {passVariablesToBackend()}}>Register</button>
      <div id='test' >
        
      </div>
    </div>

  );
}

