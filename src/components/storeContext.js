import React from "react";
import SampleStore from "./stores/SampleStore";

const storeContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const sampleStore = SampleStore;
  return (
    <storeContext.Provider value={sampleStore}>
      {children}
    </storeContext.Provider>
  );
};

export const useStore=()=>React.useContext(storeContext)
