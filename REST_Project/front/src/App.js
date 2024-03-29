import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/api/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });

    // const result = await axios.get("http://localhost:5000/api/todo");
    // setTodos(result.data);
  };

  useEffect(() => fetchData(), []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.text.value);

    const todo = {
      text: e.target.text.value,
      status: false,
    };

    fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => fetchData());

    // await axios.post("http://localhost:5000/api/todo", todo);
    // fetchData();
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type="text" name="text" />
        <button type="submit">확인</button>
      </form>

      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.status ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
