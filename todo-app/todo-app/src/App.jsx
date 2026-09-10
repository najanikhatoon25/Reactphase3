import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodoList] = useState([]);
  const [edit, setEdit] = useState(null);

  // 1. CREATE TASK
  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTodoList([...todos, task]);
    setTask("");
  };

  // 2. UPDATE TASK 
  const handleUpdateTask = () => {
    if (task.trim() === "") return;
    
    if (edit !== null) {
      const newArray = [...todos];
      newArray[edit] = task;
      setTodoList(newArray);
      setEdit(null);
    }
    setTask("");
  };

  
  const handleEditTask = (index) => {
    const oldText = todos[index];
    setTask(oldText);
    setEdit(index);
  };

  // delete task
  const handleDeleteTask = (indexToRemove) => {
    const newArray = todos.filter((item, index) => index !== indexToRemove);
    setTodoList(newArray);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Todo App</h2>
        <input 
          type="text" 
          placeholder="Enter your task..." 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-4 py-1 m-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none" 
        />
        
        {edit !== null ? (
          <button 
            onClick={handleUpdateTask}
            className="bg-green-500 text-white text-sm px-4 py-1 rounded-lg ml-6 transform hover:-translate-y-1 transition-all duration-150 ease-in-out"
          >
            Update
          </button>
        ) : (
          <button 
            onClick={handleAddTask}
            className="bg-blue-500 text-white text-sm px-4 py-1 rounded-lg ml-6 transform hover:-translate-y-1 hover:bg-green-500 transition-all duration-150 ease-in-out"
          >
            Add
          </button>
        )}
      </div>

      {/* 4. READ TASK  */}
      <ul className="space-y-2">
        {todos.map((item, index) => (
          <li 
            key={index}
            className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-md text-gray-700 flex justify-between items-center m-4 w-80"
          >
            <span>{item}</span> 
            <div className="flex gap-2">
              <button 
                onClick={() => handleEditTask(index)}
                className="text-blue-500 border border-blue-200 px-2 py-1 rounded text-sm"
              >
                Edit
              </button>
           
              <button 
                onClick={() => handleDeleteTask(index)}
                className="text-red-500 border border-red-200 px-2 py-1 rounded text-sm hover:bg-red-50"
              >
                Delete
              </button> 
            </div> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
