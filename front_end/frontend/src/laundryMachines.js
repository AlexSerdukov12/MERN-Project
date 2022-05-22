import React, {useEffect, useState} from 'react'
import './Signin.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function LaundryMachines(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
     getLaundryMachines()
  },[])
    function getLaundryMachines () {
      console.log('Sending request to backend')
      Axios.get('http://localhost:5001/getlaundrymachines').then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        setArrayOfMachines(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
    function addToWishlist(item) {
      if(!props.user) {
        alert('Please login to perform member operations!')
      } else {

      
      console.log('Sending request to backend-dryers')
      Axios.post('http://localhost:5001/addtowishlist', {
        item: item,
        user: props.user
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        
      }).catch(err => {
        console.log(err);
      })
    }
    }
    function RenderLaundryMachines() {
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div>{item.brand}</div>
          <div>{item.model}</div>
      <div>{item.price} {item.currency}</div>
          <div>{item.name}</div>
          <button onClick={() => {addToWishlist(item)}}>add to wishlist</button>

        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
              <RenderLaundryMachines />
    </div>

  );
}

