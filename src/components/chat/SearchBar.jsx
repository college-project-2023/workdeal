import React,{useState} from 'react'
import styles from "./chat.module.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(true); // State to manage visibility of search results
    const [showSearchInput, setShowSearchInput] = useState(true);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        fetchData();

        
      };
      const handleSearchClick = () => {
        setShowSearchResults(true); // Hide search results when a user is clicked
        setShowSearchInput(true);
        fetchData();
      

      };
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/allusers", {
            params: {
              search: search,
            },
          });
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
    //   console.log(search);
    //   console.log(users);
    const handleUserClick = () => {
      setShowSearchResults(false); // Hide search results when a user is clicked
      setShowSearchInput(false); // Hide search input when a user is clicked
  };
  return (
    <div
                className="card mb-sm-3 mb-md-0 pl-0px contacts_card"
                style={{
                  height: "600px",
                  borderRadius: "15px",
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
              >
                
                <div
                  className="card-header"
                  style={{
                    borderRadius: "15px 15px 0 0",
                    borderBottom: "0 !important",
                  }}
                >
                    
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search..."
                      name=""
                      className={styles.search} style={{height:"40px"}}
                      onChange={handleSearchChange}
                    />
                    <div class="input-group-prepend">
                      <span
                        className="input-group-text search_btn"
                        style={{
                          borderRadius: "0 15px 15px 0",
                          backgroundColor: "rgba(0,0,0,0.3)",
                          border: "0",
                          color: "white",
                          cursor: "pointer",
                          height: "40px",
                        }}
                        onClick={handleSearchClick}
                      >
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body contacts_body"
                  style={{
                    padding: "0.75rem 0 !important",
                    overflowY: "auto",
                    whiteSpace: "nowrap",
                  }}
                >
                  <ui class={styles.contacts}>
                    <li class={styles.active}>
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
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
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
                            Khalid
                          </span>
                          <p
                            style={{
                              fontSize: "10px",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            Kalid is online
                          </p>
                        </div>
                      </div>
                    </li>
                    {showSearchResults && search != "" && users.map((user) => (
                      <li key={user._id} onClick={handleUserClick}>
                        <div className="d-flex bd-highlight">
                          <div
                            className="img_cont"
                            style={{
                              position: "relative",
                              height: "70px",
                              width: "70px",
                            }}
                          >
                            <img
                              src={user.imageUrl}
                              className="rounded-circle user_img"
                              style={{
                                height: "70px",
                                width: "70px",
                                border: "1.5px solid #f5f6fa",
                              }}
                            />
                            <span
                              className={`online_icon ${
                                user.isOnline ? "online" : "offline"
                              }`}
                              style={{
                                position: "absolute",
                                height: "15px",
                                width: "15px",
                                backgroundColor: user.isOnline
                                  ? "#4cd137"
                                  : "#e74c3c",
                                borderRadius: "50%",
                                bottom: "0.2em",
                                right: "0.4em",
                                border: "1.5px solid white",
                              }}
                            ></span>
                          </div>
                          <div className={styles.user_info}>
                            <span style={{ fontSize: "20px", color: "white" }}>
                              {user.fname}
                            </span>
                            <p
                              style={{
                                fontSize: "10px",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              {user.typeofacc}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ui>
                </div>
                <div
                  className="card-footer"
                  style={{
                    borderRadius: "0 0 15px 15px",
                    borderTop: "0 !important",
                  }}
                ></div>
              </div>
  )
}

export default SearchBar
