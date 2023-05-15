import React from 'react';
import './type-user.css';

export const Typeuser = (props) => {

  return (
    <div>
      <div className='divtypeuser'>
        <img src={props.image} className='worker'/>
        <h5>{props.name}</h5>
      </div>
    </div>
  )
}
