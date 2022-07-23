import React, { useState } from "react";
import './App.css'

const App= () =>{

  const [task,setTask]=useState("");
  const [items,setItems]=useState([]);
const inputTask=(event)=>{
 setTask(event.target.value)
}
const addTask=()=>{
 setItems((oldValues)=>{
   return [...oldValues,task];
 });
 setTask("");

};
const deleteTask=(id)=>{
  // console.log("deleted")
  setItems((oldValues)=>{
    return oldValues.filter((arrItems,index)=>{
      return index !==id;

    });
  });
};
  

  
  return(
    <div className="main-class">
      <div className="centre-class">
        <h1 className="heading">TO DO LIST</h1>
        <input type="text" placeholder="Add your task" value={task} onChange={inputTask} />
        <button className="add-btn" onClick={addTask}> + </button>

        
          {/* <li>{items}</li> */}
          {items.map((value,index)=>{
            
            return(
              <ol key={index}>
              <button className="del-btn" onClick={()=>deleteTask(index)}>x</button>
              <li>{value}</li>
              </ol>

            ) 
            
          })}
      
        
      </div>
    </div>
  )

}
export default App;