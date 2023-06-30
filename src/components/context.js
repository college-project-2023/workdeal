// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [myVariable, setMyVariable] = useState('');

  const updateVariable = (newValue) => {
    setMyVariable(newValue);
  };

  return (
    <MyContext.Provider value={{ myVariable, updateVariable }}>
      {children}
    </MyContext.Provider>
  );
};
