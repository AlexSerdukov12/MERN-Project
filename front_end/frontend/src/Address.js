import React from 'react'
import './Signin.css'


import {useState,useEffect} from 'react'
import Axios from 'axios'
import { Homepage } from './homepage'
import {setLogin} from './App'
import { useNavigate } from 'react-router-dom'



export function MyAddress(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const user = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    getMyAddress(props)
    
  },[])

  const [country, setCountry] = useState(user.addres[0])
  const [city, setCity] = useState(user.addres[1])
  const [zip, setZip] = useState(user.addres[2])
  const [street, setStreet] = useState(user.addres[3])
  const [nostreet, setNoStreet] = useState(user.addres[4])
  const [noaprtment, setNoAprtment] = useState(user.addres[5])
  const [phonenumber, setPhoneNumber] = useState(user.addres[6])

    function getMyAddress (props) {
        
    }
  
    function RenderMyAddress() {
      const renderItems = <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
      <div >
          <div >
          </div>
          <div >
              <div >
                  <div >
                  </div>

                  <div class="adress">
                       <h1>Adress</h1>

                      <div ><label >Country</label><input value={country}  onChange={event => {setCountry(event.target.value)}}    /></div>
                         <div ><label >City</label><input value={city} onChange={event => {setCity(event.target.value)}}  /></div>
                      <div ><label >Zip</label><input   onChange={event => {setZip(event.target.value)}} value={zip}/></div>
                      <div ><label >Street</label><input onChange={event => {setStreet(event.target.value)}}  value={street}/></div>
                      <div ><label >No.Street</label><input  onChange={event => {setNoStreet(event.target.value)}}  value={nostreet}/></div>
                      <div ><label >No.Apartment</label><input  onChange={event => {setNoAprtment(event.target.value)}} value={noaprtment}/></div>
                      <div ><label >Phone Number</label><input  onChange={event => {setPhoneNumber(event.target.value)}}  value={phonenumber}/></div>  
                  </div>
                  <div ><button class="btn btn-primary Address-button" type="button">Next to payment</button></div>
              </div>
          </div>
         
      </div>




  </div>
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
        <h1>Choose your adress or edit</h1>
              < RenderMyAddress  />
 </div>

  );
}




























