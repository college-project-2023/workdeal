// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const [serviceType, setServiceType] = useState({"location":"","category":"","pricerange":"","rating":""});

  const updateVariable = (newValue) => {
    setServiceType(newValue);
  };

  const [serviceName, setServiceName] = useState({});

  const updateServiceName = (newValue) => {
    setServiceName(newValue);
  };

  const [isService, setIsService] = useState(false);

  const updateIsService= (newValue) => {
    setIsService(newValue);
  };



  return (
    <MyContext.Provider value={{ serviceType, updateVariable, serviceName,updateServiceName,isService,updateIsService }}>
      {children}
    </MyContext.Provider>
  );
};
