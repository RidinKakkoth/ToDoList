import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const toDoRef = useRef(null);

  const addTodo = () => {
    toDoRef.current.focus()
    const newTodo = { text: toDoRef.current.value, status: false };
    setToDos([...toDos, newTodo]);
    toDoRef.current.value = "";
  };

  const toggleTodoStatus = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos[index].status = !updatedTodos[index].status;
    setToDos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = toDos.filter((_, i) => i !== index);
    setToDos(updatedTodos);
  };

  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);


  return (
    <div className="app">
      <div className="cardhead">

      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>  it's  {formattedDate}  🌝 ☕ </h2>
      </div>
      </div>
       <div className="card">
      <div className="input">
        <input ref={toDoRef} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((obj, index) => (
          <div className="todo" key={index}>
            <div className="left">
              <input
                checked={obj.status}
                type="checkbox"
                name=""
                onChange={() => toggleTodoStatus(index)}
              />
              <p className={obj.status ? 'completed' : ''}>{obj.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => deleteTodo(index)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
     
     
    </div>
    </div>
  );
}

export default App;
