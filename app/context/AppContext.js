import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showContactModal,
        setShowContactModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};
