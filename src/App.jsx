import { useEffect, useState } from "react";

const App = () => {
  //
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    showTable();
  }, []);

  const showTable = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();

    setTodo(data);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              {todo.completed ? <td>Done</td> : <td className="none">None</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default App;
