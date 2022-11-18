import React from "react";
import SampleStore from "./stores/SampleStore";
//declare a new react context
const storeContext = React.createContext();

//provider component
export const StoreProvider = ({ children }) => {
  //declare store to be value of provider. see SampleStore definition at /stores/SampleStore
  const sampleStore = SampleStore;
  //react context provider
  return (
    <storeContext.Provider value={sampleStore}>
      {children}
    </storeContext.Provider>
  );
};
//useContext helper
export const useStore=()=>React.useContext(storeContext)
