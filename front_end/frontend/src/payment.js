import React from 'react'
import './Signin.css'


import {useState,useEffect} from 'react'
import Axios from 'axios'
import { Homepage } from './homepage'
import {setLogin} from './App'
import { useNavigate } from 'react-router-dom'
import { WishList } from './wishList'



export function MyPayment(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const user = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    getMyPayment(props)
    
  },[])

  const [card_number, setCard_number] = useState(user.payment[0])
  const [exp_date, setExpDate] = useState(user.payment[1])
  const [cvc, setCVC] = useState(user.payment[2])
  

    function getMyPayment (props) {
        
    }

    function checkIfitemsValid(){

      for(var i=0 ; i<user.wishlist.length ; ++i){
        if(user.wishlist[i].quantity<=0)
        alert('the item '+user.wishlist[0].brand+' '+user.wishlist[0].model + 'isnt on stock')
        break
      }
      //// if all items are valid lets go to place it on oreders on urser db
      console.log('all items on stock');
      addToOrdersUser()
    }
    
    function addToOrdersUser(){

      Axios.post('http://localhost:5001/addToOrdersfromwishlist', {data: user}).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        
      }).catch(err => {
        console.log(err);
      })

      
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
                       <h1></h1>

                      <div ><label >Country</label><input value={card_number}  onChange={event => {setCard_number(event.target.value)}}    /></div>
                         <div ><label >City</label><input value={exp_date} onChange={event => {setExpDate(event.target.value)}}  /></div>
                      <div ><label >Zip</label><input   onChange={event => {setCVC(event.target.value)}} value={cvc}/></div>
                   
                  </div>
                  <form action="/addAdress/payment">
                  <input type="submit" value="pay and add to your orders" onClick={checkIfitemsValid()} />
              </form>              </div>
          </div>
         
      </div>




  </div>
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
        <h1>Choose your payment or insert new-its wont change ur current payment</h1>
              < RenderMyAddress  />
 </div>

  );
}




























