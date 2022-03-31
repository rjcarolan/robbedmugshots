import React from 'react'
import logo from './Resources/mug.png'
import { Row, Col } from 'react-bootstrap'

const Missing = () => {
  return (
    <div>
      <h1>Missing Something?</h1>
      <img
            src={logo}
            className="image"
            alt="React Bootstrap logo"
          />{' '}
      <p>Rob, Are you missing something? </p>
    </div>
  )
}

export default Missing