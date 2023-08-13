"use client"
import Create from '@/components/Create';
import Show from '@/components/Show';
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [status, setstatus] = useState("due");
  const [task, settask] = useState([])
  const [activetask, setactivetask] = useState(null);
  return (
  <div className='mt-5 container p-5 w-50'>
    <Create
      title = {title}
      settitle = {settitle}
      desc = {desc}
      setdesc = {setdesc}
      status = {status}
      setstatus = {setstatus}
      activetask = {activetask}
      settask = {settask}
      task = {task}
      setactivetask = {setactivetask}
    />
    <h3>Pending Task</h3>
    <Show 
      task = {task}
      settitle = {settitle}
      setdesc = {setdesc}
      setstatus = {setstatus}
      setactivetask = {setactivetask}
      settask = {settask}
    />
    </div>
  )
}

export default page