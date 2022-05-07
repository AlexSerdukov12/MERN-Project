import React, {useEffect, useState} from 'react'
import Axios from 'axios'
export function Stoves() {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    getStoves()
  },[])
    function getStoves () {
      console.log('Sending request to backend-televisions')
      Axios.get('http://localhost:5001/getstoves').then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        setArrayOfMachines(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
    function RenderStoves() {
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div>{item.brand} </div>
          <div>{item.model} </div>
      <div>{item.price} {item.currency}</div>
          <div>{item.name}</div>

        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
              <RenderStoves />
    </div>

  );
}

