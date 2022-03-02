import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos(currentArray => [...currentArray, toDo]);
    setToDo("");
  }
  const onDelete = (index) => {
    setToDos(toDos.filter((todo, i) => index !== i));
  }
    return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your To Do"></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((todo, index) => <li key={index}>{todo}<button onClick={() => onDelete(index)}>❌</button></li>)}
    </div>
  )
}

export default App;
