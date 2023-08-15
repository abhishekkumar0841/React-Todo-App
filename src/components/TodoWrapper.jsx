import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
import "./TodoWrapper.css";
import ListButtons from "./ListButtons";
import Counter from "./Counter";
import TodoStatus from "./TodoStatus";
const TodoWrapper = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [status, setStatus] = useState("pending");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function addBtnClick(e) {
    e.preventDefault();
    setTodoLists([...todoLists, inputValue]);
    setInputValue("");
  }

  function updateHandler(id){

  }

  function removeHandler(id){
    const updateTodo = todoLists.filter((t, idx)=> {
      return id !== idx 
    })
    setTodoLists(updateTodo)
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
            <div className="myDiv" key={idx}>
              <Counter count={idx + 1} />
               <TodoLists todo={todo} />
              <TodoStatus status={status} />
              <ListButtons listButtonsValue="Update Status" onclick={(e)=>console.log(e.target.value)} />
              <ListButtons listButtonsValue="Remove" onclick={()=>removeHandler(idx)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoWrapper;
