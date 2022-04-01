import React from 'react'
import logo from '../Resources/Journey.jpg'

const Journey = () => {
  return (
    <div>
      <h1>A Journey</h1>
      <img
            src={logo}
            className="image"
            alt="React Bootstrap logo"
          />{' '}
      <p>I quite like this mug. The caked-on tea and saliva add a unique flavour. Maybe I will keep it... </p>
    </div>
  )
}

export default Journey