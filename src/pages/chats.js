import React,{useState,useEffect} from 'react'
import Chat from '../components/chat/Chat'
import { auth } from "../firebase/firebase";
import { Button, Dialog, DialogTitle, ToggleButton } from "@mui/material";
import LoginPage from "../components/acount/login";
import SignUpPage from "../components/acount/sign-up";
import axios from "axios";



const chats = () => {
  const [authentication, setAuthentication] = useState(null);
  const [userdata, setUserdata] = useState();

  const [showLogin, setShowLogin] = useState(false);
  const closeLogin = () => {
    if (auth.currentUser) {
      setShowLogin(false);
    }
  };

  const [showSignUp, setShowSignUp] = useState(false);
  const closeSignUp = () => {
    if (auth.currentUser) {
      setShowSignUp(false);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setAuthentication(user);
        setShowLogin(false);
      } else {
        setShowLogin(true);
      }
    });
    const getData = async () => {
      if (auth.currentUser) {
        const useruid = auth.currentUser.uid;
        const idtoken = await auth.currentUser.getIdToken();
        axios
          .post(`http://localhost:5000/get-user-data/`, {
            uid: useruid,
            idtoken: idtoken,
          })
          .then((data) => {
            if (data.status == 200) {
              console.log(data);
              setUserdata(data.data);
              // setTypeOfAcc(data.data.typeofacc);
              // if (
              //   data.data.imageUrl != null ||
              //   data.data.imageUrl != undefined
              // ) {
              //   // setImageUrl(data.data.imageUrl);
              // }
              // setAddress1(data.data.address);
              // setAddress2(data.data.address2);
            } else {
              window.alert("something went wrong");
            }
          })
          .catch((error) => {
            console.log(error);
            if (error && error.response && error.response.status == 404) {
              window.location = "/login-google-required";
            } else {
              window.alert(error.message);
            }
          });
      }
    };

    getData();
  }, [authentication]);
  // console.log(userdata)

  return (
    <>
     <Dialog open={showLogin} onClose={closeLogin}>
        <LoginPage signup={setShowSignUp} login={setShowLogin} />
      </Dialog>
      <Dialog open={showSignUp} onClose={closeSignUp}>
        <SignUpPage signup={setShowSignUp} login={setShowLogin} />
      </Dialog>
      
   {userdata ? (<Chat user={userdata}/>): ("")}
                       
      
    </>
        
    
  )
}

export default chats