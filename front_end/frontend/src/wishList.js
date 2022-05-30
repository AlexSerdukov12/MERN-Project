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
          Axios.post('http://localhost:5001/getwishlist', {
            user: props.user
          }).then(res => {
            setArrayOfMachines(res.data.wishlist);

          }).catch(err => {
            console.log(err);
          })
        }
    }
    function removeFromCart(item) {
      if(!props.user) {
        alert('Please login to perform member operations!')
      } else {
      console.log('Sending request to backend-dryers')
      Axios.post('http://localhost:5001/removefromwihlist', {
        item: item,
        user: props.user
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);

        var update=sessionStorage.getItem('user')
        update=JSON.parse(update)
        var newArray = update.wishlist.filter(i => i._id !== item._id)
        console.log(newArray);
            update.wishlist = newArray
            sessionStorage.setItem('user',JSON.stringify(update))
            getWishList()
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
          <button onClick={() => {removeFromCart(item)}}>delete item</button>


        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    function TotalAmount(){
      var update=sessionStorage.getItem('user')
      update=JSON.parse(update)
      console.log(update.wishlist.length)
      var sum=0;

      for(var i=0; i< update.wishlist.length;++i){
        sum+=update.wishlist[i].price
      }
      return sum
    }
    return (
        <div className="App">
                    <label>Total To Pay:{TotalAmount()} </label>

              <form action="/addAdress">
                  <input type="submit" value="Buy all wishlist" />
              </form>


              <RenderWishList />
    </div>

  );
}

