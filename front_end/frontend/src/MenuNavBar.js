import React from 'react'
import './MenuNavBar.css'

export function Menu(params) {

  return (
  <div class="topnav">
  <a class="active" href="/" onClick={() => {params.setViewPage('home')}}>Home</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('laundrymachines')}}>Laundry Machines</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('dryers')}}>Dryers</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('refrigerators')}}>Refrigerators</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('dishwashers')}}>Dish Washers</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('televisions')}}>Televisions</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('stoves')}}>Stoves</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('airconditioners')}}>Air Conditioners</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('ovens')}}>Ovens</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('cart')}}>cart</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('wishlist')}}>wishlist</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('myprofile')}}>My Profile</a>



  <div class='sidebar'> 
     <a href="/signin">Sign in</a>
  <a href="/signup">Sign up</a>
</div>


  </div>

  )
}

