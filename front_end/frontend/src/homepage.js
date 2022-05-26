import React, {useEffect, useState} from 'react'
import { Menu } from './MenuNavBar'
import { SearchField } from './SearchField'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LaundryMachines } from './laundryMachines'
import { Promotions } from './Promotions';
import { Dryers } from './Dryers';
import { Refrigerators } from './refrigerators';
import { Dishwashers } from './dishwashers';
import { Televisions } from './televisions';
import { Stoves } from './stoves';
import { Airconditioners } from './airconditioners';
import { Ovens } from './ovens';
import { useParams,useNavigate } from 'react-router-dom';

export function Homepage() {
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
      return <LaundryMachines />
    }
    else if (viewPage == 'dryers') {
      return <Dryers />
    }
    else if (viewPage == 'refrigerators') {

      return <Refrigerators />
    }
    else if (viewPage == 'dishwashers') {
      return <Dishwashers />
    }
    else if (viewPage == 'televisions') {
      return <Televisions />
    }
    else if (viewPage == 'stoves') {

      return <Stoves />
    }
    else if (viewPage == 'airconditioners') {
      return <Airconditioners />
    }
    else if (viewPage == 'ovens') {
      return <Ovens />
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

