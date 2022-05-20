
import React from 'react'
import './SearchField.css' 
import axios from 'axios'
import { useState } from 'react'
export function SearchField() {
  const [test, settest ]= useState('')
  const [foundProducts, setfoundProducts] = useState([])

  function passToBackend () {
    console.log('Sending request to backend')
    console.log(test)

    axios.post('http://localhost:5001/search', {
      test_data: test,
    }).then(res => {
      console.log('Received response from back - response below');
      console.log(res.data);
      setfoundProducts(res.data);

    }).catch(err => {
      console.log(err);
    })
  }
  function RenderFoundProducts() {
    console.log("**********************foundProducts**************************")
    console.log(foundProducts)
    console.log("**********************foundProducts**************************")

    const renderItems = foundProducts.map(item=> 
      <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
        <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
        <div>{item.brand}</div>
        <div>{item.model}</div>
        <div>{item.price} {item.currency}</div>
        <div>{item.name}</div>
        <button>add to cart</button>
      </div>)
    return <div style={{width: '100%', padding: '40px', display: 'flex'}}>
       {renderItems}
    </div>
  }

  
  return (
    <div class="search-container">
      <input value={test} onChange={event => {settest(event.target.value)}} type="text" placeholder='search by brand'></input>
      <button onClick={() => {passToBackend()}}>Search</button>
      <RenderFoundProducts />
    </div>



  )
}

