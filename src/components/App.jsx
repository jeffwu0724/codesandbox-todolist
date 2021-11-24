import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [toDo, setToDo] = React.useState([]);

  function handleChange(event) {
    setItem(event.target.value);
    //console.log(item);
  }

  function addToList() {
    setToDo((prevValue) => {
      return [...prevValue, item];
    });
    //console.log(toDo);
    setItem("");
  }

  function showItem(item) {
    return <li> {item} </li>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{toDo.map(showItem)}</ul>
      </div>
    </div>
  );
}

export default App;
