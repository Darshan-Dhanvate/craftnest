import React from 'react'
import './Hero.css'
import hand from '../assets/hand.png'
import arrow from '../assets/arrow.png'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand} alt="" />
          </div>

          <p>products</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Products</div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero