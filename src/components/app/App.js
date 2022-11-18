import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DataShow from "../DataShow";
import { useStore } from "../storeContext";

function App() {
  const store = useStore();
  //useEffect usage to fetch data
  useEffect(() => {
    store.loadData();
  }, [store]);

  if (store.data === null) return <h1>No data!</h1>;
  //page render
  return (
    <>
      <h1 style={{display:'flex',margin:'auto'}}>Data successfully fetched, total : {store.data.limit}</h1>
      <DataShow />
    </>
  );
}
//IMPORTANT: observer to subscibre to any changes happen in data store
export default observer(App);
