import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <br />
            <input type="text" name="title" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Due date:
            <br />
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Details:
            <br />
            <input type="text" name="description" onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Profit:
            <br/>
            <select name="profit" required onChange={(event) => props.change(event)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </label>
        <br />
        <input type="submit" value="Submit" onChange={(event) => props.change(event)}/>
        </form>
    </div>
  )
};

export default AddTaskForm;