import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/login/loginSlice";
import LoginChecker from "../utils/LoginChecker";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logout())
    navigate("/");
  };
  const {isLogin, isAdmin} = LoginChecker();
  return (
    <div style={styles.navbar}>
      <h1>Bukapedia</h1>
      <Link to="/home" style={styles.nav}>
        Home
      </Link>
      {(isLogin && !isAdmin) &&  (
        <Link to="/cart" style={styles.nav}>
          Cart
        </Link>
      )}
      {isAdmin && (
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
