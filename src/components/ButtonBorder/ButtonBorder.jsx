import React from 'react'
import './buttonborder.css'

const ButtonBorder = ({children}) => {
  return (
    <div className='border'>
        {children}
    </div>
  )
}

export default ButtonBorder