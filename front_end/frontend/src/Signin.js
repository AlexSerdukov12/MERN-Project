import React from 'react'
import './Signin.css'
import {useState} from 'react'
import Axios from 'axios'
export function Signin() {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
  
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
          ///// לעבור לדף הבית כמחובר
        } else {
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

