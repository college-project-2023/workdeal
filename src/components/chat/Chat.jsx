import React, { useEffect , useState}  from "react";
import styles from "./chat.module.css";
import Header2 from "../header/Header2";
import SearchBar from "./SearchBar";
import Chatbox from "./Chatbox";
import {io} from 'socket.io-client';
import  axios  from "axios";

import { Dialog, DialogTitle,ToggleButton } from "@mui/material";


const Chat = ({user} = props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [Message , setMessage] = useState("");
  const [receive , setReceive] = useState([]);
  const [messages, setMessages] = useState([]);

  const socket = io('http://localhost:5000'); 
  const recieveMsg = () => {
    socket.on("messageReturn", (obj) => {
      console.log(obj);
    })
  }

const connectSocket = () => {
  socket.on('connect', () => {
    console.log('Connected to server');
  });
}

  useEffect(() => {
  
  
    connectSocket();
    recieveMsg();
  
    return () => {
      socket.disconnect();
    }; 
  }, []);
  

 
  const  Profiler = ()=>{
      setProfile(true);
  }

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
const closeprofile =()=>{setProfile(false);}
const handleSend= async()=>{
  socket.emit('message', { message: Message, receiverId: "1234567890"});

  try {
    const response = await axios.post('http://localhost:5000/chat', {
      senderid: user.uid,
      receiverid: "1234567890",
      message: Message
    });
    // console.log(response.data);
    setMessages((prevMessages) => [...prevMessages, Message]);
  //  console.log(response.data);
    // Assuming you want to log the response data
    // Handle response data as needed
  } catch (error) {
    console.error(error);
    // Handle error as needed
  }


};

  return (
    <>

      <Header2 />
      {
        profile && 
        <Dialog open={profile} onClose={closeprofile}>
         
          
    <div style={{ textAlign: 'center' }} className={styles.card1}>
    <div className={styles.upper}>
          <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid"></img>
    <DialogTitle style={{ textAlign: 'center', fontSize: '24px', color: '#333' }}>Profile</DialogTitle>
          </div>


          <div className={styles.user}>
         <div className={styles.profile}>
         <img
            src={user.imageUrl}
            className="rounded-circle user-img"
            style={{
                
                boxShadow: "0 4px 8px black",
            }}
            alt="User Profile"
        />
         </div>
          </div>
        <div style={{ marginTop: '20px' }} class="mt-5 text-center">
            <DialogTitle  class="mb-0">{user.fname} {user.lname}</DialogTitle>
            <DialogTitle  class="text-muted d-block mb-2">{user.typeofacc}</DialogTitle>
            <DialogTitle style={{ fontSize: '19px', color: '#666', marginBottom: '10px' }} mb-0>Email: {user.email}</DialogTitle>
           
            {/* Add more sections such as user's interests, achievements, etc. */}
        </div>
    </div>
</Dialog>

    }
      <div
        className="body"
        style={{
          height: "765px",
          margin: 0,
          background: "#7F7FD5",
          background:
            "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
          background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
        }}
      >
        <div class="container-fluid h-400" style={{ alignContent: "center" }}>
          <div
            class="row justify-content-center h-600"
            style={{ paddingTop: " 120px" }}
          >
            <div
              className="col-md-4 col-xl-3 chat h-600 "
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <SearchBar />
              
            </div>
            
    <div class="col-md-8 col-xl-6 chat">
              <div
                class="card"
                style={{
                  height: "600px",
                  borderRadius: "15px",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  width: "900px",
                }}
              >
                <div
                  class="card-header msg_head"
                  style={{ position: "relative" }}
                >
                  <div class="d-flex bd-highlight">
                    <div
                      className="img_cont"
                      style={{
                        position: "relative",
                        height: "70px",
                        width: "70px",
                      }}
                    >
                      {" "}
                      <img
                         src={user.imageUrl}
                        class="rounded-circle user_img"
                        style={{
                          height: "70px",
                          width: "70px",
                          border: "1.5px solid #f5f6fa",
                        }}
                      />
                      <span class={styles.online_icon}></span>
                    </div>
                    <div class={styles.user_info}>
                      <span style={{ fontSize: "20px", color: "white" }}>
                        Chat with {user.fname}
                      </span>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        1767 Messages
                      </p>
                    </div>
                    <div class={styles.video_cam} >
                      <span
                        style={{
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                          marginRight: "20px",
                        }}
                      >
                        <i class="fas fa-video"></i>
                      </span>
                      <span
                        style={{
                          color: "white",
                          fontSize: "20px",
                          cursor: "pointer",
                          marginRight: "20px",
                        }}
                      >
                        <i class="fas fa-phone" ></i>
                      </span>
                    </div>
                  </div>
                  <span
                    id="action_menu_btn"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  >
                    
                    <i class="fas fa-ellipsis-v" ></i>
                  </span>
                 
        <div className={styles.action_menu}>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} style={{marginLeft: "-214px",

  marginTop: "-17px",
  zIndex: "-1",
  opacity: "0.4",
  backgroundcolor: "#f0dddd"}}>
            <li className='dropdown-item'>
              <i className="fas fa-user-circle"  onClick={Profiler}></i> View profile
            </li>
            <li className='dropdown-item'>
              <i className="fas fa-users"></i> Add to close friends
            </li>
            <li className='dropdown-item'>
              <i className="fas fa-plus"></i> Add to group
            </li>
            <li className='dropdown-item'>
              <i className="fas fa-ban"></i> Block
            </li>
         </ul>
        </div>
        <div className="">
        <span
                    id="action_menu_btn"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    onClick={toggleDropdown}
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    
        <i className="fas fa-ellipsis-v fa-lg"></i>
      </span>
      <div >
      {/* <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} >
        <li className='dropdown-item' onClick={Profiler}><i className="fas fa-user-alt pe-2"></i>My Profile</li>
        <li className='dropdown-item'> <i className="fas fa-cog pe-2"></i>Settings</li>
        <li className='dropdown-item'> <i className="fas fa-door-open pe-2"></i>Logout</li>
      </ul> */}
      </div>
    </div>
                </div>
                <div
                  className="card-body msg_card_body"
                  style={{ overflowY: "auto" }}
                >
                  <div class="d-flex justify-content-start mb-4">
                    <div
                      class="img_cont_msg"
                      style={{ height: "40px", width: "40px" }}
                    >
                      <img
                        src={user.imageUrl}
                        class="rounded-circle user_img_msg"
                        style={{
                          height: "40px",
                          width: "40px",
                          border: "1.5px solid #f5f6fa",
                        }}
                      />
                    </div>
                   
                    <div class={styles.msg_cotainer}>
                    {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
                      <span class={styles.msg_time}>9:07 AM, Today</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end mb-4">
                    <div className={styles.msg_cotainer_send}>
                    {receive.map((msg, index) => (
          <p key={index}>{msg}</p>))}
                      <span class={styles.msg_time_send}>9:10 AM, Today</span>
                    </div>
                    <div
                      class="img_cont_msg"
                      style={{ height: "40px", width: "40px" }}
                    >
                      <img
                        src={user.imageUrl}
                        class="rounded-circle user_img_msg"
                        style={{
                          height: "40px",
                          width: "40px",
                          border: "1.5px solid #f5f6fa",
                        }}
                      />
                    </div>
                  </div>
                 
                </div>
                <div
                  className="card-footer"
                  style={{
                    borderRadius: "0 0 15px 15px",
                    borderTop: "0 !important",
                  }}
                >
                  <div class="input-group">
                    <div class="input-group-append"></div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text"
                        style={{
                          borderRadius: "15px 0 0 15px",
                          backgroundColor: "rgba(0,0,0,0.3)",
                          border: "0",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {" "}
                        <i className="fas fa-paperclip" ></i>
                      </span>
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInputGroup1"
                          placeholder="Username"
                          onChange={(event)=>setMessage(event.target.value)}
                          style={{
                            boxShadow: "none !important",
                            outline: "0px !important",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderColor: "rgba(0, 0, 0, 0.3)",
                            color: "white",
                            width: "760px",
                          }}
                        />
                        <label for="floatingInputGroup1">MESSAGE</label>
                      </div>
                      <span
                      onClick={handleSend}
                        class="input-group-text"
                        style={{
                          borderRadius: "0 15px 15px 0",
                          backgroundColor: "rgba(0,0,0,0.3)",
                          border: "0",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        <i class="fas fa-location-arrow"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
