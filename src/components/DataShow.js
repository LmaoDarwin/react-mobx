import { observer } from "mobx-react-lite";
import { useStore } from "./storeContext";
//component to show data
const DataShow = () => {
  let x = 0
  const store = useStore();
  //see full data structure : https://dummyjson.com/products
  
  return store.data.products.map((i) => {
    x++
    return (
      <div style={{ padding: "0 30px" }} key={i.id}>
        <h1>
          {x}. {i.title}
        </h1>
        <p>
          {i.description}
          <br />${i.price}
          <br />
        </p>
        <strong>
          NOW DISCOUNT!!!
          <h1>
            <i> ${Math.floor(i.price - i.price / i.discountPercentage)}</i>
          </h1>
        </strong>
        <button
          onClick={() => (store.removeData(i.id), alert(`Product ${i.title} deleted!`))}
        >
          Delete
        </button>
        <hr />
      </div>
    )
  });
};

export default observer(DataShow);
