import React from 'react'
import { toast } from 'react-toastify';
const Create = (prpos) => {
    const {title , settitle , desc , setdesc , status , setstatus , activetask , settask , task, setactivetask } = prpos
   // for add new task 
   const chnageHandler = (event) => {
    event.preventDefault()
    // validation 
    if(title.length <5 || desc.length < 20){
      toast.error("Title and Description are more than 5 and 20 character respectively")
      return;

    }
    const newObj ={
      date : new Date().toLocaleDateString(),
      title,
      desc,
      status
    }

    // const copyTask = [...task];
    // copyTask.push(newObj);
    // settitle(copyTask)
 
    settask([...task,newObj]);
    console.log(task);
    settitle("")
    setdesc("")
    setstatus("due");


}

// for update task and show to card update handler
const updateTask = (e) =>{
  e.preventDefault();
  const copyTask = [...task];
  copyTask[activetask] = {...copyTask[activetask], title,desc,status}
  settask(copyTask);
  setactivetask(null);
  settitle("")
  setdesc("")
  setstatus("due");
  
}
  
  return (
    <form className='w-50 btn btn-info'>
  <h3>Create Your Task</h3>
    <input 
    className='form-control mb-3' 
    type="text"
     placeholder='anything'
      value={title} 
      name='title'
      onChange={(event) =>{settitle(event.target.value)}}
      /> 

       <textarea className='form-control mb-3' value={desc}
       onChange={(event)=>{setdesc(event.target.value)}}
       ></textarea>
       
       <select className='form-control mb-3' value={status} onChange={(event)=>{setstatus(event.target.value)}}>
        <option value="due">Due</option>
        <option value="pending">pending</option>
        <option value="complete">complete</option>
       </select> 
       {activetask === null ? ( <button onClick={chnageHandler} className='btn bg-success mt-4 '>ADD TASK</button>) :(
        <button onClick={updateTask} className='btn bg-success mt-4 '>UPDATE TASK</button>
       )}
      <hr />
  </form>
  )
}

export default Create