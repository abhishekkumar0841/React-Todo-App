import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "./TodoWrapper.css";
import TodoControler from "./TodoControler";

const TodoWrapper = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoLists, setTodoLists] = useState([]);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function addBtnClick(e) {
    e.preventDefault();
    if (inputValue === '') {
      alert("Write Some Todo First..")
    } else {
      setTodoLists([...todoLists, inputValue]);
      setInputValue("");
    }
  }

  function removeHandler(id) {
    const updateTodo = todoLists.filter((t, idx) => {
      return id !== idx;
    });
    setTodoLists(updateTodo);
  }

  return (
    <div>
      <div>
        <TodoForm
          inputValue={inputValue}
          onChange={onChange}
          addBtnClick={addBtnClick}
        />
      </div>

      <div className="listContainer">
        {todoLists.map((todo, idx) => {
          return (
            <TodoControler
              key={idx}
              id={idx}
              todo={todo}
              removeHandler={removeHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoWrapper;
