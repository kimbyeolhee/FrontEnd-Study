import { useState } from "react";

function TodoInput({ submitHandler }) {
  const [userInput, setUserInput] = useState("");
  
  function handleChange(event) {
    event.preventDefault();
    setUserInput(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // App에 새로운 todo 생성
    submitHandler(userInput);
    setUserInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} 
             onChange={handleChange}
             type="text" 
             placeholder="New TODO"
            ></input>
    </form>
  )
}

export default TodoInput;