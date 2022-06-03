import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Popup from './AdminPopup'


export function Laundriesedit() {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [currency, setCurrency] = useState('')
  const [id , setId]=useState('')
  const db='laundrymachines'
  const dbc='laundrymachines_c'
  

  useEffect(() => {
    getLaundryMachines()
  },[])


  const togglePopup = () => {
    setIsOpen(!isOpen);
    }
  
  function popping (it){


    setBrand(it.brand)
    setModel(it.model)
    setCurrency(it.currency)
    setPrice(it.price)
    setQuantity(it.quantity)
    setId(it.id)
    

    }
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

    function saveEdit()
    {
        console.log('Sending request to backend')
      Axios.post('http://localhost:5001/editproduct',{id,db,dbc,brand,model,quantity,price,currency}).then(res => {
        console.log('Received response from back - response below');
        ///////////update sessionStorage

        console.log(res.data);
      }).catch(err => {
        console.log("post failed")
        console.log(err);
      })

    }
    
    
    function RenderProducts() {
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div><label>id: {item.id}</label></div>
          <div><label>Brand: {item.brand}</label></div>
          <div><label>Model: {item.model}</label></div>
          <div><label>Price: {item.price}</label></div>
          <div><label>Currency: {item.currency}</label></div>
          <div><label>Quantity:  {item.quantity} </label></div>
            
          <button onClick={() => {popping(item);togglePopup()}}>Edit item</button>
          
          {isOpen && <Popup
            content={<>

                   
            <div ><label >Brand</label><input value={brand}  onChange={event => {setBrand(event.target.value)}}    /></div>
            <div ><label >model</label><input value={model}  onChange={event => {setModel(event.target.value)}}    /></div>
            <div ><label >price</label><input value={price}  onChange={event => {setPrice(event.target.value)}}    /></div>
            <div ><label >currency</label><input value={currency}  onChange={event => {setCurrency(event.target.value)}}    /></div>
            <div ><label >quantity</label><input value={quantity}  onChange={event => {setQuantity(event.target.value)}}    /></div>

            <button onClick={() => {saveEdit()/*;Popup.handleClose()*/}}>Save Changes</button>
              
              
            </>}
            handleClose={togglePopup}
          />}


        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
              <RenderProducts />
              
    </div>

  );
}