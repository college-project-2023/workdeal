import React from 'react';
import './type-user.css';

export const Typeuser = (props) => {

  return (
    <div>
    <div className='divtypeuser'>
      <img src={props.image} className='worker'/>
      <h4>{props.name}</h4>
    </div>
    </div>
  )
}
