
import React from 'react'
import { Link } from 'react-router-dom'
import './btn_sign_up.css'

export const Btn_sign_up = (props) => {


  return (
    <div>
        <Link to={props.path}>
            <button type='button' className='btn_sign_up' >Sign Up</button>
        </Link>
    </div>
  )
}

