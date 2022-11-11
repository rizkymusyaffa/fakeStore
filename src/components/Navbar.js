import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h1>Bukapedia</h1>
      <Link to="/home" style={styles.nav}>
        Home
      </Link>
      {localStorage.getItem("token") === "isUser" && (
        <Link to="/cart" style={styles.nav}>
          Cart
        </Link>
      )}
      {localStorage.getItem("token") === "isAdmin" && (
        <Link to="/sales" style={styles.nav}>
          Rekap Penjualan
        </Link>
      )}
      {!localStorage.getItem("token") && (
        <Link to="/login" style={styles.nav}>
          Login
        </Link>
      )}
      {localStorage.getItem("token") && (
        <button onClick={() => handleLogout()}>Logout</button>
      )}
    </div>
  );
};

const styles = {
  navbar: {
    height: "15vh",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nav: {
    color: "black",
  },
};

export default Navbar;
