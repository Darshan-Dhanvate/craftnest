import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>subscribe to our newsletter and stay updated</p>

      <div>
        <input type="email" placeholder='your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
