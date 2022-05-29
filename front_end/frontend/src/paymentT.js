import React from 'react'
import {useState,useEffect} from 'react'
import Axios from 'axios'
import axios from 'axios'

export function MyPaymentT() {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const user = JSON.parse(sessionStorage.getItem('user'))

 

  const [card_number, setCard_number] = useState(user.payment[0])
  const [exp_date, setExpDate] = useState(user.payment[1])
  const [cvc, setCVC] = useState(user.payment[2])
  
    function checkIfitemsValid(){
      Axios.post('http://localhost:5001/checkitemsfromcart', { email:user.email}).then(res => {
        console.log(res.data)
        if(res.data=='All Product available') {
          addToOrdersUser()
        }
        else{
          alert(res.data)
          //// move to home !
        }
      }).catch(err => {
        console.log(err);
      })      

    }
    function addToOrdersUser(){

      Axios.post('http://localhost:5001/addToOrdersfromcart', { user}).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
      
    }
    
    return (
        <div className="App">
        <h1>Choose your payment or insert new-its wont change ur current payment</h1>
        <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
            <div ><label >Country</label><input value={card_number}  onChange={event => {setCard_number(event.target.value)}}    /></div>
            <div ><label >City</label><input value={exp_date} onChange={event => {setExpDate(event.target.value)}}  /></div>
            <div ><label >Zip</label><input   onChange={event => {setCVC(event.target.value)}} value={cvc}/></div>
            <button onClick={() => {checkIfitemsValid()}}>Done , its will be added shortly inside MyProfile</button>
        </div>    
        </div>

  );
}




























