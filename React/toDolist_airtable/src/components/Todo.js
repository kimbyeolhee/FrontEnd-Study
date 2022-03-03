function Todo({ value, toggleHandler }) {  // props.value와 같다.
  const { id, content, isCompleted } = value;

  function clickHandler(event) {
    // toggle
    toggleHandler(id);
  }

  return (
    <li>
      <label>
        <input type="checkbox"
          checked={isCompleted}
          onChange={clickHandler}
        ></input>
        { content }
      </label>
      <button>삭제</button>
    </li>
  )
}

export default Todo;