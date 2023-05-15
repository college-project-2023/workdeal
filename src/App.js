import  Signuptype from './pages/sign-up-type'
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Router, Routes } from 'react-router-dom';
import { Btn_sign_up } from './component/home_page/btn_sign_up';

function App() {

  
  return (
    <div className="App">
      <center> 
       <Btn_sign_up path="/signup"/>
      </center>

    </div>
  );
}

export default App;
