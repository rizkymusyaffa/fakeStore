import Modal from "react-bootstrap/Modal";
import Counter from "../components/Counter";

const Detail = (props) => {
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
        <Counter />
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
