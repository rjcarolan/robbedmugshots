import React from 'react'
import logo from '../Resources/Reserves.jpg'

const Reserves = () => {
  return (
    <div>
    <h1>Naval Reserves</h1>
    <img
          src={logo}
          className="image2"
          alt="React Bootstrap logo"
        />{' '}
    <p>Wonder if they have any navy cakes to fill your mug with</p>
  </div>
  )
}

export default Reserves