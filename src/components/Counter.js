import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleClickPlus = () => {
    setCounter(Number(counter) + 1);
  };

  const handleClickMin = () => {
    if (counter > 1) {
      setCounter(Number(counter) - 1);
    }
  };

  useEffect(() => {
    console.log(counter);
  }, [counter])

  return (
    <div style={styles.container}>
      <Button style={styles.btn} onClick={() => handleClickMin()}>
        -
      </Button>
      <input type="number" value={counter} onChange={(e) => setCounter(e.target.value)} style={styles.counter}></input>
      <Button style={styles.btn} onClick={() => handleClickPlus()}>
        +
      </Button>
    </div>
    
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  btn: {},
  counter: {
    fontSize: 25,
    width: 100,
    borderBottom: "1px solid black",
    textAlign: "center",
  },
};

export default Counter;

