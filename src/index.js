import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Signuptype } from './pages/sign-up-type'


const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/signup" element={<Signuptype/>} />
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
