import React from 'react'
import logo from '../Resources/Casino.jpg'
const Casino = () => {
  return (
    <div>
      <h1>Casino</h1>
      <img
            src={logo}
            className="image2"
            alt="React Bootstrap logo"
          />{' '}
      <p>Play the game right, put your points towards someone great :D </p>
    </div>
  )
}

export default Casino