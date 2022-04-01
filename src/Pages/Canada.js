import React from 'react'
import logo from '../Resources/Canada.jpg'

const Canada = () => {
  return (
    <div>
    <h1>Oh Canada</h1>
    <img
          src={logo}
          className="image2"
          alt="React Bootstrap logo"
        />{' '}
    <p>Canada is backwards on a lot of things... 
    Together we might change that... 
    Start by putting on the kettle   </p>
  </div>
  )
}

export default Canada