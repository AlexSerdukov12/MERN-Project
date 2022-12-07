import React from 'react'
import './Signin.css'
import Popup from './AdminPopup'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import Axios from 'axios'
//import { useEffect } from 'react/cjs/react.production.min'


export function Signup(props) {
    const [Email, setEmaildData ]= useState('')
    const [Password, setPasswordData] = useState('')
    const [AdminPassword,setAdminPasswordData]=useState('')
    const [isAdmin , setAdmin] = useState(false)
    
    const history = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    useEffect( () => {
      console.log(isAdmin);
  }, [isAdmin]);
  
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }

    function checkIfAdmin()
    {
      if(AdminPassword==="admin123")
      {
        setAdmin(true);

        return true;
        
      }
      else 
      {
      alert("Incorrect administrator password!");
      setAdmin(false);
      return false;
      }
    }


    function passVariablesToBackend () {
      
      console.log('Sending request to backend')
      Axios.post('http://localhost:5001/register', {
        email_data: Email,
        password_data: Password,
        admin_data: isAdmin

      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        
        if(res.data===true) {
          props.setuser(res.data)
          if(isAdmin===false)
            history('/')
          else
            history('/adminoptions')
        }
         else alert('email already exists')
        
  
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
          <p>Please enter company administrator password</p>
          <input value={AdminPassword} onChange={event => {setAdminPasswordData(event.target.value)}} type="password" placeholder='Admin Password:'></input>
          <button onClick={() => {checkIfAdmin()}}>Authorize</button>
          {isAdmin===true && 
          <p style={{ color:"green" }}>Authorized account for administrator permission</p>
          }
          
          
        </>}
        handleClose={togglePopup}
      />}

    </div>

  );
}

