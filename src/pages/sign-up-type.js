import React from 'react'
import { Typeuser } from '../component/sign-up-type/type-user'
import './sign-up-type.css'


export const Signuptype = () => {
  return (
    <center>
        <div className='maindiv'>
            <h2>Join us today</h2>
            <div className='typecontainer'>
                <Typeuser image='worker.png' name='I am worker, seeking for work'/>
                <Typeuser image='user.png' name='I am client, looking for worker'/>
            </div>
            <a id='txt_sign_up'>Welcome to the workdeal, we are here to serve you</a>
        </div>
    </center>
    
  )
}




