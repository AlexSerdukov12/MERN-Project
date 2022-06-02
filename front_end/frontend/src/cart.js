import React, {useEffect, useState} from 'react'
import Axios, { AxiosError } from 'axios'
export function Cart(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [coupon , setCoupon] = useState([''])

  const [sum,setSum]= useState([0])
  const [flag,setFlag]= useState(false)

  useEffect(() => {
    getCart()
  },[])
    function getCart () {
        if(!props.user) {
            alert('Please login to perform member operations!')
          } 
          else {
          console.log('Sending request to backend-dryers')
          Axios.post('http://localhost:5001/getcart', {
            user: props.user
          }).then(res => {
            var user=sessionStorage.getItem('user')
            user=JSON.parse(user)
            var temp=0
            for(var k=0 ; k<user.cart.length; ++k){
               temp+=(user.cart[k].price)
            }
            console.log(' here the temp ='+temp)

            setSum(temp)
            console.log('Received response from back - response below');
            console.log(res.data.cart);
            setArrayOfMachines(res.data.cart);

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
      Axios.post('http://localhost:5001/removefromcart', {
        item: item,
        user: props.user
      }).then(res => {
        console.log('Received response from back - response below');
        console.log(res.data);
        var update=sessionStorage.getItem('user')
        update=JSON.parse(update)
        var newArray = update.cart.filter(i => i._id !== item._id)
        console.log(newArray);
            update.cart = newArray
            sessionStorage.setItem('user',JSON.stringify(update))
        getCart()
        
      }).catch(err => {
        console.log(err);
      })
    }
    }

    function TotalAmount(){
      var update=sessionStorage.getItem('user')
      update=JSON.parse(update)
      console.log(update.cart.length)
      var sum=0;

      for(var i=0; i< update.cart.length;++i){
        sum+=update.cart[i].price
      }
      return sum
    }
    function RenderCart() {
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
    function checkCoupon()
    {

      /// lets check coupon
      Axios.post('http://localhost:5001/checkCoupon', {coupon}).then(res => {
        if(res.data) 
        {
          if(!(flag)){
            var a=sum*(1-res.data.discount)
            setSum(a)
            setFlag(true)

          }
          else{
            alert('cant more then 1 valid code')
          }
        }
        else {
          alert('coupon invalid')
        }
      }).catch(err => {
        console.log(err);
      })
    }
    return (
        <div className="App">
        <label >Total To Pay:{sum} $ </label>
                    <div>
                      <div>enter a coupon
                    <input value={coupon}  placeholder='coupon' onChange={event => {setCoupon(event.target.value)}} ></input>
                    <button onClick={() => {checkCoupon()}}>check coupon</button>
                    </div>
                    </div>              <form action="/addAdress1">
                  <input type="submit" value="Buy all Cart" />
              </form>
              <RenderCart />
    </div>

  );
}

