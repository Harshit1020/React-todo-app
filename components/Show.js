"use client"
import React from 'react'
const Show = (props) => {
    const{task , settitle, setdesc , setstatus , setactivetask , settask} = props
    // for rendring the list
 let tasklist = <h1 className='text-danger mt-5 w-100 fs-3'>loading task</h1>
 if(task.length > 0){
    tasklist = task.map((task, index)=>{
      return (
        <div key={index} className="card  mb-3 me-3" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <h5 className="card-title">{task.date}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
                {task.status}
            </h6>
            <p className="card-text">
               {task.desc}
            </p>
            <button onClick={()=> updateHandler(index)} className="me-2 btn btn-sm btn-outline-primary">
                Update Task
            </button>
            <button onClick={()=>deletHandler(index)} className="btn btn-sm  btn-outline-secondary bi bi-trash">
                Delete Task
            </button>
        </div>
    </div>
      )
    })
}


// for delete the task
const deletHandler =(index)=>{
    // const copyTask = [...task];
    // copyTask.splice(index,1);
    // settask(copyTask);  
    settask(task.filter((task, i)=> i !== index));
  
  
  }
  // for update button to see update task button and show the data in field
  const updateHandler = (index)=>{
  const {title, desc,status} = task[index];
  settitle(title);
  setdesc(desc);
  setstatus(status);
  setactivetask(index)
  }
    return (
    <div className="d-flex flex-wrap">{tasklist}</div>
  )
}

export default Show