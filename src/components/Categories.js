import { Link } from "react-router-dom";
import { useCategories } from "../hooks/Categories.hook";

const Categories = () => {
  const { categories } = useCategories();

  return (
    <div style={styles.categories}>
      {categories.map((category) => (
        <Link to={category} key={category} style={styles.nav}>
          {category.slice(0).charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  );
};

const styles = {
  categories: {
    height: "15vh",
    backgroundColor: "#EEEEEE",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nav: {
    // textDecoration: "none",
    color: "black",
  },
};

export default Categories;
