import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { addToCart } from "../features/cart/cartSlice";

const Detail = (props) => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector((state) => state.persistedReducer.login.user.id)
  const users = useSelector((state) => state.persistedReducer.users)
  const product = props.product
  const handleAddToCart = () => {
    dispatch(addToCart({product, userLoggedIn}))
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </Modal.Footer>
    </Modal>
  );
};

// const styles = {
//   detail: {
//     position: "absolute",
//     zIndex: 1,
//     backgroundColor: "white",
//     height: "100vh",
//     width: "100vw"
//   }
// }

export default Detail;
