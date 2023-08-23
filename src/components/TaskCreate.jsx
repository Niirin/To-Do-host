import { useState } from 'react'

function TaskCreate({onCreate}){
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(task);
        setTask('');  //resetting the form input to be empty after user clicked on Add
    }

    return <div className='container'>
            <form className='addCont' onSubmit={handleSubmit}>
                <input className='addField' value={task} onChange={handleChange} type="text" id="addForm" placeholder="Would you like to add?"></input>
                <button className='add-btn' >Add</button>
            </form>
        </div>; 
}

export default TaskCreate;