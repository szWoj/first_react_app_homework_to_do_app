import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [tasks, setTasks] = useState([
    // "Buy shopping", "Clean bathroom", "Car's MOT"
    
  ]);

  const [newTask, setNewTask] = useState('');

  const [newPriority, setNewPriority] = useState('');

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
    
  }
   const handlePriorityInput = (event) => {
    setNewPriority(event.target.value)
   }

  const saveNewTask = (event) => {
    event.preventDefault();

    const copyTasks = [...tasks];
    copyTasks.push({task: newTask, priority: newPriority});
    setTasks(copyTasks);

    setNewTask('');
    setNewPriority('');
  }

  const taskNodes = tasks.map((item, index) => {
    return (
      <li key={index}>
        <span>Task: {item.task} Priority: {item.priority}</span><br></br>
      </li>
    )
  })
  
  return (
    <div className="App">

      <h1>ToDo List</h1>
      <hr></hr>

      <ul>
        {/* {itemNodes} */}
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new Task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/><br></br>
        
        <p>Please select your priority:</p>
        <input type="radio" id="high" name="priority" value="high" onChange={handlePriorityInput}></input>
        <label for="high">High</label>
        <input type="radio" id="low" name="priority" value="low" onChange={handlePriorityInput}></input>
        <label for="low">Low</label><br></br>
        
        <input type='submit' value='Save new Task'/>
        {/* <label htmlFor='new-item'>Add a new item:</label>
        <input id='new-item' type='text' value={newItem} onChange={handleItemInput}/>
        <input type='submit' value='Save New Item'/> */}
      </form>

    </div>
  );
}

export default App;







// import logo from './logo.svg';
// import './App.css';
// import React, {useState} from 'react';

// function App() {
  
//   const [tasks, setTasks] = useState([
//     // "Buy shopping", "Clean bathroom", "Car's MOT"
  
//   ]);

//   const [newTask, setNewTask] = useState('');

//   const handleTaskInput = (event) => {
//     setNewTask(event.target.value);
//   }

//   const saveNewTask = (event) => {
//     event.preventDefault();

//     const copyTasks = [...tasks];
//     copyTasks.push(newTask);
//     setTasks(copyTasks);

//     setNewTask('');
//   }

//   const taskNodes = tasks.map((task, index) => {
//     return (
//       <li key={index}>
//         <span>{task}</span>
//       </li>
//     )
//   })
  
//   return (
//     <div className="App">

//       <h1>ToDo List</h1>
//       <hr></hr>

//       <ul>
//         {/* {itemNodes} */}
//         {taskNodes}
//       </ul>

//       <form onSubmit={saveNewTask}>
//         <label htmlFor='new-task'>Add a new Task:</label>
//         <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
//         <input type='submit' value='Save new Task'/>
//         {/* <label htmlFor='new-item'>Add a new item:</label>
//         <input id='new-item' type='text' value={newItem} onChange={handleItemInput}/>
//         <input type='submit' value='Save New Item'/> */}
//       </form>

//     </div>
//   );
// }

// export default App;
