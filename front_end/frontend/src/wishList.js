import React, {useEffect, useState} from 'react'
import Axios from 'axios'
export function WishList(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    getWishList()
  },[])
    function getWishList () {
        if(!props.user) {
            alert('Please login to perform member operations!')
          } 
          else {
          console.log('Sending request to backend-dryers')
          Axios.post('http://localhost:5001/getwishlist', {
            user: props.user
          }).then(res => {
            console.log('Received response from back - response below');
            console.log(res.data);
            setArrayOfMachines(res.data.wishlist);

          }).catch(err => {
            console.log(err);
          })
        }
    }
  
    function RenderWishList() {
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div>{item.brand}</div>
          <div>{item.model}</div>
      <div>{item.price} {item.currency}</div>
          <div>{item.name}</div>

        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">
              <RenderWishList />
    </div>

  );
}

