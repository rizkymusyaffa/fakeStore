import { Outlet } from "react-router-dom";
import ProductContainer from "./ProductContainer";

const Display = ({ products }) => {
  return (
    <div style={styles.display}>
      {products.map((product) => (
        <ProductContainer product={product} key={product.id} />
      ))}
      <Outlet />
    </div>
  );
};

const styles = {
  display: {
    backgroundColor: "grey",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Display;
