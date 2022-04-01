import React from 'react'
import logo from '../Resources/Sweet.jpg'
const Sweet = () => {
  return (
    <div>
    <h1>Something Sweet?</h1>
    <img
          src={logo}
          className="image"
          alt="React Bootstrap logo"
        />{' '}
    <p>I could go for something sweet...how about you place a goffer in the fridge with milk in it </p>
  </div>
  )
}

export default Sweet