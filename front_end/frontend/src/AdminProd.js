import React, {useEffect, useState} from 'react'
import { Menu } from './EditMenu'
import { LaundryMachines } from './laundryMachines'
import { Dryers } from './Dryers';
import { Refrigerators } from './refrigerators';
import { Dishwashers } from './dishwashers';
import { Televisions } from './televisions';
import { Stoves } from './stoves';
import { Airconditioners } from './airconditioners';
import { Ovens } from './ovens';
import { useParams,useNavigate } from 'react-router-dom';

import {Dishwashersedit} from './dishwashersedit'
import { AirConditionersedit } from './airconditionersedit';
import { Tvsedit } from './televisionsedit';
import { Laundriesedit } from './laundrymachinesedit';
import { Dryersedit } from './Dryersedit';
import { Refridgesedit } from './refridgeratorsedit';
import { Stovesedit } from './stovesedit';
import { Ovensedit } from './ovensedit';
import {addproduct} from './Addproduct';

export function Prod(props) {
    const [viewPage, setViewPage] = useState('Add product')
    const {page}=useParams()
   

    
  
    useEffect(() => {
      if(page !== undefined){
        setViewPage(page)
      }
    },[])
      function InhouseRender () {

         if (viewPage == 'laundrymachines') {
         return <Laundriesedit/>
      }
      else if (viewPage == 'dryers') {
        return <Dryersedit />
      }
      else if (viewPage == 'refrigerators') {
  
        return <Refridgesedit/>
      }
      else if (viewPage == 'dishwashers') {
        return <Dishwashersedit/>
      }
      else if (viewPage == 'televisions') {
        return <Tvsedit/>
      }
      else if (viewPage == 'stoves') {
  
        return <Stovesedit/>
      }
      else if (viewPage == 'airconditioners') {
        return <AirConditionersedit/>
      }
      else if (viewPage == 'ovens') {
        return <Ovensedit/>
      }
      else if (viewPage == 'Add product') {
        return <Addproduct />
      }
      ///////////////////////////////////
     
      
    }
    
    return (
      <div>
          <img src={require('./logo.jpeg')} />
          <Menu viewPage={viewPage} setViewPage={setViewPage} />
          <InhouseRender />
      </div>
  
  
  
  
    )
  }