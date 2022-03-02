import { useState, useEffect } from "react";
import styles from "./App.module.css";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed"); // cleanup function
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((current) => !current);
  return (
    <div className={styles.App}>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
