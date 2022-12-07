import React from 'react'
import './EditMenu.css'

export function Menu(params) {

  return (
  <div class="topnav">
  <a class="active" onClick={() => {params.setViewPage('Add product')}}>Main</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('laundrymachines')}}>Laundry Machines</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('dryers')}}>Dryers</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('refrigerators')}}>Refrigerators</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('dishwashers')}}>Dish Washers</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('televisions')}}>Televisions</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('stoves')}}>Stoves</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('airconditioners')}}>Air Conditioners</a>
  <a style={{cursor: 'pointer'}} onClick={() => {params.setViewPage('ovens')}}>Ovens</a>

  </div>

  )
}