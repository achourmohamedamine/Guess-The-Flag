import React,{useState} from "react";

function Todo(){
    const[activities,setActivities]=useState(["learn React","eat food","go to panorama"]);
    const [newTask,setNewTask]=useState("");
    const handleInputChange =(event)=>{
        setNewTask(event.target.value)

    }
    const handleAddtask =()=>{
        if (newTask !=""){
          setActivities([...activities,newTask]);}
    }
    const handleDelete= (index)=>{
        const updatedTasks=activities.filter((_,i)=>i!==index );
        setActivities(updatedTasks);
    }



    return(<>
    
            <div className="container">
                <h1>To-Do-List</h1>
                <div className="Todo">
                    <input type="text" placeholder="Enter Task" value={newTask} onChange={handleInputChange} />
                    <button className="btn" onClick={handleAddtask}>Add Task</button>
                    <ol>
                        {activities.map((activity,index)=>
                            <li key={index}>
                                <span className="text" >{activity}</span>
                                <button className="delete" onClick={()=>handleDelete(index)}>Delete</button>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
    
    
    
    </>)

}
export default Todo;