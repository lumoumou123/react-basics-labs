import React from 'react';

const Task = (props) => {
    const getprofitcolor=(profit)=>{
        if(profit=="Low"){
            return 'orange';
        }
        if(profit=="Medium"){
            return 'darkred';
        }
        if(profit=="High"){
            return 'darkgreen';
        }
    }
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p className="profit"  style={{backgroundColor: getprofitcolor(props.profit)}}>{props.profit}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button  onClick={props.deleteTask} className='deleteButton'>Delete</button>
        </div>
    )
}

export default Task;