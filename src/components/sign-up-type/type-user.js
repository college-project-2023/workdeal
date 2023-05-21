import Link from 'next/link';
import React from 'react';

export const Typeuser = (props) => {



  return (
    <div>
      <Link legacyBehavior href="/sign-up">
        <div className='divtypeuser'>
          <img src={props.image} className='worker'/>
          <h5 id='txt_type_user_text'>{props.name}</h5>
        </div>
      </Link>
    </div>
  )
}
