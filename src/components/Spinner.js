import React, { Component } from 'react'
import Loading from './Spinner-1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{width: '100%'}}>
        <img src={Loading} alt='Loading in progress' />
      </div>
    )
  }
}

export default Spinner
