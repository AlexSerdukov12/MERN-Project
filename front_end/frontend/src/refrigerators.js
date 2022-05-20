import React, {useEffect, useState} from 'react'
import Axios from 'axios'
export function Refrigerators() {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    getRefrigerators()
  },[])
    function getRefrigerators () {
      console.log('Sending request to backend-getrefrigerators')
      Axios.get('http://localhost:5001/getrefrigerators').then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        setArrayOfMachines(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
    function RenderRefrigerators() {
      const renderItems = arrayOfMachines.map(item => 
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
        <div className="App">
              <RenderRefrigerators />
    </div>

  );
}

