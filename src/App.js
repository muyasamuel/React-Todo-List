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
  const [ editId, setEditId] = useState(null)
  const [editing, setEditing] = useState(false);
  const  [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''

  })
  // alertShowing function
  const showAlertHandler = (show=false , type= '',msg='' )  => {
    setAlert({show, type, msg})
  }

  //edit todo function
  const editItem = (id) => {
    const actualItem = list.find((item) => item.id ===  id);
    setEditing(true);
    setEditId(id);
    setName(actualItem.name);
  }

  //delete function
  const onDeleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };


  //clearAll list items function
  const clearList = () => {
    setList([]);
    showAlertHandler(true, 'danger', 'You have cleared the list');
  };

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    

    if(name.trim() === ''){
      showAlertHandler(true, 'danger', 'Please input in a Value');
    }else if(name && editing){
     setList(list.map((item)=> {
      if(item.id === editId){
         return {...item, name}
      }
      return item;
     }));
     setName('');
     setEditing(false);
     showAlertHandler(true, 'success', 'KUDOS!!! edited the item successfull')

    }
    else{
      const newName = {
      id: Math.random().toString(16).slice(2),
      name: name,
    };
    setList([...list, newName]);
    showAlertHandler(true, 'success', 'successful!!! Added a ToDo');
    setName('');

    }

 
   
  };

  return (
    <div className="App">
      <Header />
      
      <main className="main">
        {alert.show && <Alert {...alert} onTimelyRemovingAlert={showAlertHandler} list={list}/>}
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
          editItem={editItem}
         
         
        />
      </main>
    </div>
  );
}

export default App;
