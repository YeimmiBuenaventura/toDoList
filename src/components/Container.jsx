import React, { useState } from "react";
import TaskList from "./Tasklist";
import FormTodo from "./FormTodo";

const Container = () => {
    //Create a list of statuses, this status save data
    const [list, setList] = useState([]);
    //Create a const, equaling to method addItem 
    const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
    };
    return (
    <div>
    {/*We add attributes and eject the  method whit this we update the list*/}
    <FormTodo handleAddItem={handleAddItem} />
    {/*We add attributes list and setList and we pass a status*/}
    <TaskList list={list} setList={setList} />
    </div>
    );
};
export default Container;