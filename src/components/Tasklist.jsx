import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
//We recive the list property and method setList
const { list, setList } = props;
//Recive data from checkbox
const onChangeStatus = e => {
const { name, checked } = e.target;
// Update the list with new data
const updateList = list.map(item => ({
...item,
done: item.id === name ? checked : item.done
}));
setList(updateList);
};

//Method to go through the list, filter and update this. 
const onClickRemoveItem = e => {
const updateList = list.filter(item => !item.done);
setList(updateList);
};

//we go through the list using map
const chk = list.map(item => (
<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));
return (
<div className="todo-list">
{/*Checking if list is empty*/}
{list.length ? chk : "No tasks"}
{/*Active button delete*/}
{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Delete
</button>
</p>
) : null}
</div>
);
};

export default TaskList;

