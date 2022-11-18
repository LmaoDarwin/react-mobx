import { useStore } from "./storeContext";
//component to show data
const DataShow = () => {
  const store = useStore();
  //see full data structure : https://dummyjson.com/products
  return store.data.products.map((i) => {
    return (
      <div style={{ padding: "0 30px" }} key={i.id}>
        <h1>
          {i.id}. {i.title}
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
          dataid={i.id}
          onClick={(e) => console.log(e.target.attributes.dataId.value)}
        >
          Click to console id props
        </button>
        <hr />
      </div>
    );
  });
};

export default DataShow;
