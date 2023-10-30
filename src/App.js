import "./App.css";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  return (
    <div>
      <UseMemoComponent />
    </div>
  );
};

const expensiveFunc = (num) => {
  console.log("expensive func");

  for (let i = 0; i < 1000000000; i++) {
    num += i;
  }

  return num;
};

const UseMemoComponent = memo(() => {
  const [todo, setTodo] = useState(["todo 1"]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useFetch("users", count, setData);

  const addTodo = useCallback(
    () => setTodo((prevTodo) => [...prevTodo, "new todo"]),
    [todo]
  );
  const addCount = () => setCount((prevCount) => prevCount + 1);
  const calcultedValue = useMemo(() => expensiveFunc(count), [count]);
  console.log("use memo component render");

  useEffect(() => {
    console.log("data", data);
  });

  return (
    <div>
      <Todolist todo={todo} addTodo={addTodo} />
      <h1>count: {count}</h1>
      <button onClick={addCount}>Add count</button>
      <p>{calcultedValue}</p>
      <div>
        {data.map((d, index) => (
          <p key={index}>{d.name}</p>
        ))}
      </div>
    </div>
  );
});

const Todolist = memo(({ todo, addTodo }) => {
  console.log("todolist render");
  return (
    <>
      <h1>Todos:</h1>
      <button onClick={addTodo}>Add new todo</button>
      {todo.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
      <hr />
    </>
  );
});

export default App;
