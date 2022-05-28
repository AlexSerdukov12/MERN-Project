import React from 'react'
import './Signin.css'
import Popup from './AdminPopup'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Axios from 'axios'


export function Signup(props) {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
    const [AdminPassword,setAdminPasswordData]=useState('')
    const [isAdmin , setAdmin] = useState(false)
    const history = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }

    function checkIfAdmin()
    {
      if(AdminPassword=="admin123")
        setAdmin(true);
    }


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
      <input
        type="button"
        value="Admin? Click here"
        onClick={togglePopup}
      />
      {isOpen && <Popup
        content={<>
          <input value={AdminPassword} onChange={event => {setAdminPasswordData(event.target.value)}} type="password" placeholder='Company Administrator Password:'></input>
            <button onClick={() => {checkIfAdmin()}}>Authorize</button>
        </>}
        handleClose={togglePopup}
      />}

    </div>

  );
}

