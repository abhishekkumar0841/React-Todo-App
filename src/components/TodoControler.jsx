import React, {useState} from 'react'
import Counter from './Counter';
import TodoLists from './TodoLists';
import TodoStatus from './TodoStatus';
import ListButtons from './ListButtons';

const TodoControler = ({ id, removeHandler, todo }) => {

  const [status, setStatus] = useState("Pending")


  return (
    <div className="myDiv">
      <Counter count={id + 1} />
       <TodoLists todo={todo} />
      <TodoStatus status={status} />
      <ListButtons listButtonsValue="Update Status" onclick={()=> setStatus("Completed")} />
      <ListButtons listButtonsValue="Remove" onclick={()=>removeHandler(id)} />
    </div>
  );
}

export default TodoControler
