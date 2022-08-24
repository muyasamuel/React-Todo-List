import {  useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Alert from "./components/Alert";

const todos = [
  {
    id: "t1",
    name: "Do some general house cleaning",
  },
  {
    id: "t2",
    name: "Go for some shopping ",
  },
  {
    id: "t3",
    name: "Finish my assignments",
  },
  {
    id: "t4",
    name: "Do my project",
  },
];

function App() {
 
  const [list, setList] = useState(todos);
  const [editing, setEditing] = useState(false);
  const  [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''

  })


  // const editItem = (id) => {
  //   const actualItem = list.find((item) => item.id ===  id);
  //   setEditing(true);
  //   // setName(actualItem.name);
  // }

  const onDeleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const addTodoHandler = (newName) => {
    setList([...list, newName]);
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="App">
      <Header />
      {alert.show && <Alert {...alert} />}
      <main className="main">
        <Input onAddTodo={addTodoHandler}  editing={editing} />
        <List
          list={list}
          onDelete={onDeleteHandler}
          clearAll={clearList}
         
         
        />
      </main>
    </div>
  );
}

export default App;
