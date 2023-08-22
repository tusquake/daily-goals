import React,{useEffect, useState} from 'react';
import Header from './Header';
import Task from './Task';

const Home = () => {

  const initialArray = localStorage.getItem("tasks")?
  JSON.parse(localStorage.getItem("tasks"))
  : [];

  const [tasks,setTasks] = useState(initialArray);
  const[title,setTitle] = useState("");
  const[description,setdescription] = useState("");



  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks,{title,description}])
    setTitle("")
    setdescription("")
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

  const deleteTask = (index) =>{
      const filteredArr = tasks.filter((val,i)=>{
        return i!==index
  })
  setTasks(filteredArr)
  }

  return (
    <div className='container'>
        <h1>Kam Karle Bhai</h1>
        <h2>Get,Set,Go...!</h2>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>
            setTitle(e.target.value)}/>
            <input placeholder='Description' value={description} onChange={(e)=>
            setdescription(e.target.value)}/>

            <button type='submit' >Add</button>
        </form>
        {tasks.map((item,index)=>(
        <Task key={index} title={item.title} description={item.description}
        deleteTask={deleteTask}
        index={index}/>
        ))}
    </div>
  )
}

export default Home;
