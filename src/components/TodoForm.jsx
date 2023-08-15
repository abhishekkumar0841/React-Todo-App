import React from "react";
import './TodoForm.css'

const TodoForm = ({inputValue, onChange, addBtnClick}) => {
  return (
    <div className="formContainer">
      <form className="form">
      <input type="text" className="formInput" placeholder="Write Your Todo Here" autoFocus value={inputValue} onChange={onChange} />
      <button className="addTodoBtn" type="submit" onClick={addBtnClick}>Add</button>
    </form>
    </div>
  );
};

export default TodoForm;
