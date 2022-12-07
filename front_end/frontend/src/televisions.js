import React, {useEffect, useState} from 'react'
import Axios from 'axios'
export function Televisions(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    getTelevisions()
  },[])
    function getTelevisions () {
      console.log('Sending request to backend-televisions')
      Axios.get('http://localhost:5001/gettelevisions').then(res => {
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
        var update=sessionStorage.getItem('user')
        update=JSON.parse(update)
        update.wishlist.push(item)
        sessionStorage.setItem('user',JSON.stringify(update))
        
      }).catch(err => {
        console.log(err);
      })
    }
    }
    function addToCart(item) {
      if(!props.user) {
        alert('Please login to perform member operations!')
      } else {

      
      console.log('Sending request to backend-dryers')
      Axios.post('http://localhost:5001/addtocart', {
        item: item,
        user: props.user
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        var update=sessionStorage.getItem('user')
        update=JSON.parse(update)
        update.cart.push(item)
        sessionStorage.setItem('user',JSON.stringify(update))
      }).catch(err => {
        console.log(err);
      })
    }
    }
    function RenderTelevisions() {
      const renderItems = arrayOfMachines.map(item => 
        <div style={{border: '2px black solid', height: '400px',width: '220px', margin: '20px', display: 'grid'}}>
          <img src={item.image_link} style={{maxHeight: '150px', maxWidth:'220px'}} />
          <div>{item.brand} {item.inch}</div>
          <div>{item.model} </div>
      <div>{item.price} {item.currency}</div>
          <div>{item.name}</div>
          <button onClick={() => {addToWishlist(item)}}>add to wishlist</button>
          <button onClick={() => {addToCart(item)}}>add to cart</button>



        </div>)
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    function changeFunc(i) {
      if(i == 'incPrice'){
        console.log('Sending request to backend-dishwashers')
        Axios.post('http://localhost:5001/getTelevisionsSort',{i}).then(res => {
          console.log('Received response from back - response below');
          console.log(res.data);
          setArrayOfMachines(res.data);

        }).catch(err => {
          console.log(err);
        })        
      }
      else if(i == 'DecPrice'){
        console.log('Sending request to backend-dishwashers')
        Axios.post('http://localhost:5001/getTelevisionsSort',{i}).then(res => {
          console.log('Received response from back - response below');
          console.log(res.data);
          setArrayOfMachines(res.data);

        }).catch(err => {
          console.log(err);
        })        }
      else if(i == 'alphabet'){
        console.log('Sending request to backend-dishwashers')
        Axios.post('http://localhost:5001/getTelevisionsSort',{i}).then(res => {
          console.log('Received response from back - response below');
          console.log(res.data);
          setArrayOfMachines(res.data);

        }).catch(err => {
          console.log(err);
        })   }

        else if(i == 'date'){
          console.log('Sending request to backend-dishwashers')
          Axios.post('http://localhost:5001/getTelevisionsSort',{i}).then(res => {
            console.log('Received response from back - response below');
            console.log(res.data);
            setArrayOfMachines(res.data);
  
          }).catch(err => {
            console.log(err);
          })  
         }
        }
    return (
        <div className="App">
             <select id="selects"   onChange={e=>changeFunc(e.target.value)} >
              <option >choose ur sort option</option>

                <option value="incPrice">increasing price</option>
                <option value="DecPrice">decreasing price</option>
                <option value="alphabet">alphabet</option>
                <option value="date">newest</option>

              </select>
              <RenderTelevisions />
    </div>

  );
}

