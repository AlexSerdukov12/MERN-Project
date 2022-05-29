import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import "./AdminOptions"
import { chooseOption } from './AdminOptions'
export function MyProfile(props) {
  const [email, setEmail] = useState([''])
  const [password, setPassword] = useState([''])
  const [country, setCountry] = useState([''])
  const [city, setCity] = useState([''])
  const [zip, setZip] = useState([''])
  const [street, setStreet] = useState([''])
  const [no_street, setNo_street] = useState([''])
  const [no_aprtment, setNo_aprtment] = useState([''])
  const [phonenumber, setPhonenumber] = useState([''])
  const [card_number, setCard_number] = useState([''])
  const [exp_date, setExpDate] = useState([''])
  const [cvc, setCVC] = useState([''])
  const [orders, setOrders] = useState([''])
  const [arrayOfMachines, setArrayOfMachines] = useState([])

    function RenderOrders() {
      console.log('Sending request to backend-dryers')
      Axios.post('http://localhost:5001/getuserorders', {data:props.user.email}   )
      .then(res => {
        console.log(res.data.orders);
        setArrayOfMachines(res.data.orders)
      }).catch(err => {
        console.log(err);
      })
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div>{item.brand}</div>
          <div>{item.model}</div>
      <div>{item.price} {item.currency}</div>
          <div>{item.name}</div>
          <button >Cancel Order</button>
        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    
    return (
      <div className="App" style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
        <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
        <h1>Account</h1>
        <div ><label >email</label><input value={email}  onChange={event => {setEmail(event.target.value)}}    /></div>
        <div ><label >password</label><input value={password} onChange={event => {setPassword(event.target.value)}}  /></div>
        <button >Save Account changes</button>
      </div>    

      <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
         <h1>Adress</h1>
          <div ><label >Country</label><input value={country}  onChange={event => {setCountry(event.target.value)}}    /></div>
          <div ><label >City</label><input value={city} onChange={event => {setCity(event.target.value)}}  /></div>
          <div ><label >Zip</label><input  value={zip}  onChange={event => {setZip(event.target.value)}} /></div>
          <div ><label >Street</label><input  value={street}  onChange={event => {setStreet(event.target.value)}} /></div>
          <div ><label >No.street</label><input  value={no_street}  onChange={event => {setNo_street(event.target.value)}} /></div>
          <div ><label >No.aprtment</label><input  value={no_aprtment}  onChange={event => {setNo_aprtment(event.target.value)}} /></div>
          <div ><label >Phonenumber</label><input  value={phonenumber}  onChange={event => {setPhonenumber(event.target.value)}} /></div>
          <button >Save Adress changes</button>
      </div>  
      <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
          <h1>Payment details</h1>
          <div ><label >Card Number</label><input value={country}  onChange={event => {setCountry(event.target.value)}}    /></div>
          <div ><label >Exp Date</label><input value={city} onChange={event => {setCity(event.target.value)}}  /></div>
          <div ><label >CVC</label><input  value={zip}  onChange={event => {setZip(event.target.value)}} /></div>
          <button >Save Adress changes</button>
      </div> 
      <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
          <h1>Orders</h1>
          <RenderOrders/>
      </div> 
      <div>

      <button onClick={() => {chooseOption()}}>Admin options</button>

      </div>
      </div>
 

      

  );
}

