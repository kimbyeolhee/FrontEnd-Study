import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCount((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value); 
  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when count changes");
  },[count]);
  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="search here..."
      ></input>
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
