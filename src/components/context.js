// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [serviceType, setServiceType] = useState({"location":"","category":"","pricerange":"","rating":""});

  const updateVariable = (newValue) => {
    setServiceType(newValue);
  };


  return (
    <MyContext.Provider value={{ serviceType, updateVariable }}>
      {children}
    </MyContext.Provider>
  );
};
