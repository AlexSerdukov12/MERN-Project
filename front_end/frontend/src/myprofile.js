import React, {useEffect, useState} from 'react'
import Axios from 'axios'
export function MyProfile(props) {
  const [arrayOfMachines, setArrayOfMachines] = useState([])
  useEffect(() => {
    getMyProfile(props)
  },[])
    function getMyProfile (props) {
        if(!props.user) {
            alert('Please login to perform member operations!')
            
          } 
          else {
          Axios.post('http://localhost:5001/getcart', {
            user: props.user
          }).then(res => {
            setArrayOfMachines(res.data.cart);

          }).catch(err => {
            console.log(err);
          })
        }
    }
  function getEmail(){
      return props.user.email
  }
  function getPassword(){
    return props.user.password
}
  function getCounty(){
    return props.user.addres[0]
}
function getCity(){
    return props.user.addres[1]
}
function getZip(){
    return props.user.addres[2]
}
function getStreet(){
    return props.user.addres[3]
}
function getNoStreet(){
    return props.user.addres[4]
}
function getNoAprtment(){
    return props.user.addres[5]
}
function getPhoneNumber(){
    return props.user.addres[6]
}
function getCardNumber(){
    return props.user.payment[0]
}function getExpDate(){
    return props.user.payment[1]
}function getCVC(){
    return props.user.payment[2]
}
    function RenderMyProfile(props) {
      const renderItems = <div style={{border: '2px black solid', margin: '20px', display: 'grid'}}>
      <div >
          <div >
          </div>
          <div >
              <div >
                  <div >
                     <h1>Profile</h1>
                  </div>
                  <div >
                      <div ><label >Email</label><input  value={getEmail()} /></div>
                    <div ><label >Password</label><input type="password" value={getPassword()}  /></div>
            </div>
                  <div class="adress">
                       <h1>Adress</h1>
                      <div ><label >Country</label><input    value={getCounty()}  /></div>
                        <div ><label >City</label><input  value={getCity()} /></div>
                      <div ><label >Zip</label><input    value={getZip()} /></div>
                      <div ><label >Street</label><input    value={getStreet()}/></div>
                      <div ><label >No.Street</label><input    value={getNoStreet()}/></div>
                      <div ><label >No.Apartment</label><input    value={getNoAprtment()}/></div>
                      <div ><label >Phone Number</label><input    value={getPhoneNumber()}/></div> 
                  </div>
                  <div class="payment">
                      <h1>Payment</h1>
                      <div ><label >Card Number</label><input   value={getCardNumber()}/></div>
                      <div ><label >Expiration Date</label><input   value={getExpDate()}/></div>
                      <div ><label >CVC</label><input  value={getCVC()}/></div>

                  </div> 
                  <div ><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
              </div>
          </div>
         
      </div>

        <div>
            <h1>Orders</h1>

        </div>












      
  </div>
      return <div style={{width: '100%', padding: '40px', display: 'flex',flexWrap: 'wrap'}}>
         {renderItems}
      </div>
    }
    return (
        <div className="App">

              <RenderMyProfile />
    </div>

  );
}

