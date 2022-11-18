import { useStore } from "./storeContext";

const DataShow = () => {
  const store = useStore();
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
          Click to console id
        </button>
        <hr />
      </div>
    );
  });
};

export default DataShow;
