//We use useState when we put a stat at component
import React, { useState } from "react"; 
 //Use a prop to eject a function
const FormTodo = props => {
  //Use method to add a new register
  const { handleAddItem } = props; 
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    //Avoid that the page refresh
    e.preventDefault(); 
    //These are the attributes 
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}> {/*Calling Method*/}
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <inputremote
            type="text"
            className="text"
            //Asigned status description to input
            value={description} 
            onChange={e => setDescription(e.target.value)}
          />
          {/*(A)*/}
          <button
            className="button pink"
            //Verified that description has value
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;