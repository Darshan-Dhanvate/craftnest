import React from 'react'
import './Offers.css'
import exclusive_offers from '../assets/exclusive_offers.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>only on bestseller products</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_offers} alt="" />
      </div>
    </div>
  )
}

export default Offers
