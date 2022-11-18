import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DataShow from "../DataShow";
import { useStore } from "../storeContext";

function App() {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    store.loadData();
    setLoading(false);
  }, [store]);
  if (loading) return <h1>Loading ...</h1>;
  if (store.data === null) return <h1>No data!</h1>;

  return (
    <>
      <h1>Data successfully fetched, total : {store.data.limit}</h1>
      <DataShow />
    </>
  );
}

export default observer(App);
