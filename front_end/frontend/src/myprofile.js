import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import "./AdminOptions"
import { chooseOption } from './AdminOptions'
export function MyProfile(props) {
  const user = JSON.parse(sessionStorage.getItem('user'))
  const [email, setEmail] = useState([user.email])
  const [password, setPassword] = useState([user.password])
  const [country, setCountry] = useState(user.addres[0])
  const [city, setCity] = useState(user.addres[1])
  const [zip, setZip] = useState(user.addres[2])
  const [street, setStreet] = useState(user.addres[3])
  const [nostreet, setNoStreet] = useState(user.addres[4])
  const [noaprtment, setNoAprtment] = useState(user.addres[5])
  const [phonenumber, setPhoneNumber] = useState(user.addres[6])
  const [card_number, setCard_number] = useState([user.payment[0]])
  const [exp_date, setExpDate] = useState([user.payment[1]])
  const [cvc, setCVC] = useState([user.payment[2]])
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    if(!props.user) {
      alert('Please login to perform member operations!')
    } 
    else{
    Axios.post('http://localhost:5001/getuserorders', props.user   )
    .then(res => {
      setArrayOfMachines(res.data.orders)
    }).catch(err => {
      console.log(err);
    })
  }
  }, []);
 

    function saveAccountInfo(){
  
    }
    function saveAdressInfo(){
      console.log('Sending request to backend-ovens')
      Axios.post('http://localhost:5001/editadress',{email,country,city,zip,nostreet,street,noaprtment,phonenumber}).then(res => {
        console.log('Received response from back - response below');
        ///////////update sessionStorage

        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
    function savePaymentInfo(){
      console.log('Sending request to backend-ovens')
      Axios.post('http://localhost:5001/editpayment',{email,card_number,exp_date,cvc}).then(res => {
        console.log('Received response from back - response below');
        ///////////update sessionStorage

        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })

    }
    function RenderOrders() {
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
        <div ><label >password</label><input type='password' value={password} onChange={event => {setPassword(event.target.value)}}  /></div>
{/*         <button onClick={() => {saveAccountInfo()}}>Save account change</button>
 */}      </div>    

      <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
         <h1>Adress</h1>
          <div ><label >Country</label><input value={country}  onChange={event => {setCountry(event.target.value)}}    /></div>
          <div ><label >City</label><input value={city} onChange={event => {setCity(event.target.value)}}  /></div>
          <div ><label >Zip</label><input  value={zip}  onChange={event => {setZip(event.target.value)}} /></div>
          <div ><label >Street</label><input  value={street}  onChange={event => {setStreet(event.target.value)}} /></div>
          <div ><label >No.street</label><input  value={nostreet}  onChange={event => {setNoStreet(event.target.value)}} /></div>
          <div ><label >No.aprtment</label><input  value={noaprtment}  onChange={event => {setNoAprtment(event.target.value)}} /></div>
          <div ><label >Phonenumber</label><input  value={phonenumber}  onChange={event => {setPhoneNumber(event.target.value)}} /></div>
          <button onClick={() => {saveAdressInfo()}}>Save Adress change</button>
      </div>  
      <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
          <h1>Payment details</h1>
          <div ><label >Card Number</label><input value={card_number}  onChange={event => {setCard_number(event.target.value)}}    /></div>
          <div ><label >Exp Date</label><input value={exp_date} onChange={event => {setExpDate(event.target.value)}}  /></div>
          <div ><label >CVC</label><input  value={cvc}  onChange={event => {setCVC(event.target.value)}} /></div>
          <button onClick={() => {savePaymentInfo()}}>Save Payment change</button>
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

