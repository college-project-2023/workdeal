import React from 'react'
import { Typeuser } from '../components/sign-up-type/type-user'
//import './sign-up-type.css'

  function Signuptype(){
    return (
      <center>
          <div className='maindiv'>
              <h2>Join us today</h2>
              <div className='typecontainer'>
                  <Typeuser image='assets/images/worker.png' name='I am worker, seeking for work'/>
                  <Typeuser image='assets/images/user.png' name='I am client, looking for worker'/>
              </div>
              <a id='txt_sign_up'>Welcome to the workdeal, we are here to serve you</a>
          </div>
      </center>
      
    )
  }

  export default Signuptype;




