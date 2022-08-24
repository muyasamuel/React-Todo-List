import {  useState } from "react";
import "./App.css";
import Header from "./components/Header";
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

 const [ name, setName] = useState('');
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



  const clearList = () => {
    setList([]);
    setAlert({show: true, msg: ' Cleared the list ',  type: 'danger'})
  };

  const onSubmitHandler = (e) =>{
    e.preventDefault();

    if(name.trim() === ''){
      setAlert({show: true, msg: ' Please input a VALUE',  type: 'danger'})
    }else{
      const newName = {
      id: Math.random().toString(16).slice(2),
      name: name,
    };
    setList([...list, newName]);
    setAlert({show: true, msg: ' successful!!! You added a ToDo',  type: 'success'})
    setName('');

    }

 
   
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main">
        {alert.show && <Alert {...alert} />}
      <form className='inputDiv' onSubmit={onSubmitHandler}>
        <input
          className='inputField'
          type="text"
          placeholder=" eg... Finish my react projects"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='actions'>{editing ? 'Edit' : 'Submit'}</button>
      </form>
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
