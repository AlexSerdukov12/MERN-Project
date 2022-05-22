import React, {useEffect, useState} from 'react'
import { Menu } from './MenuNavBar'
import { SearchField } from './SearchField'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LaundryMachines } from './laundryMachines'
import { Promotions } from './Promotions';
import { Dryers } from './dryers';
import { Refrigerators } from './refrigerators';
import { Dishwashers } from './dishwashers';
import { Televisions } from './televisions';
import { Stoves } from './stoves';
import { Airconditioners } from './airconditioners';
import { Ovens } from './ovens';
import { useParams,useNavigate } from 'react-router-dom';
import { WishList } from './wishList';
import { Cart } from './cart';

export function Homepage(props) {
  const [viewPage, setViewPage] = useState('home')
  const {page}=useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if(page !== undefined){
      setViewPage(page)
    }
  },[])
    function InhouseRender () {
    if (viewPage == 'home') {
      return <Promotions />
    } 
    else if (viewPage == 'laundrymachines') {
      return <LaundryMachines user={props.user}/>
    }
    else if (viewPage == 'dryers') {
      return <Dryers user={props.user} />
    }
    else if (viewPage == 'refrigerators') {

      return <Refrigerators user={props.user}/>
    }
    else if (viewPage == 'dishwashers') {
      return <Dishwashers user={props.user}/>
    }
    else if (viewPage == 'televisions') {
      return <Televisions user={props.user}/>
    }
    else if (viewPage == 'stoves') {

      return <Stoves user={props.user}/>
    }
    else if (viewPage == 'airconditioners') {
      return <Airconditioners user={props.user}/>
    }
    else if (viewPage == 'ovens') {
      return <Ovens user={props.user}/>
    }
    ///////////////////////////////////
    else if (viewPage == 'wishlist') {
      return <WishList user={props.user}/>
    }  
    else if (viewPage == 'cart') {
      return <Cart user={props.user} />
    }  
   
    
  }
  
  return (
    <div>
        <img src={require('./logo.jpeg')} />
        <Menu viewPage={viewPage} setViewPage={setViewPage} />
        <SearchField />
        <InhouseRender />
    </div>




  )
}

