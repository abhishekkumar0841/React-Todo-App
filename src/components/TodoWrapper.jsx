import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoLists from "./TodoLists";
import "./TodoWrapper.css";
import ListButtons from "./ListButtons";
import ShowStatus from "./ShowStatus";
import Counter from "./Counter";
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
    // const updateStatus = todoLists.filter((t, idx)=>{
    //   return id == idx
    //  })
     setStatus("cpml")
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
              <ShowStatus status={status} />
              <ListButtons listButtonsValue="Update Status" onclick={updateHandler} />
              <ListButtons listButtonsValue="Remove" onclick={()=>removeHandler(idx)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoWrapper;
