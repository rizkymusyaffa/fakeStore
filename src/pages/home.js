import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Categories from "../components/Categories";
import Display from "../components/Display";
import Navbar from "../components/Navbar";

const Home = () => {
  const { products } = useSelector((state) => state.persistedReducer.products);
  const { categories } = useSelector(
    (state) => state.persistedReducer.categories
  );

  return (
    <div>
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/" element={<Display products={products} />}></Route>
        {categories.map((category) => {
          const categoryProduct = products.filter(
            (product) => product.category === category
          );
          return (
            <Route
              path={category}
              element={<Display products={categoryProduct} />}
              key={category}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default Home;
