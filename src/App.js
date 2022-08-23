
import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Input from './components/Input';
import List from './components/List';
import Alert from './components/Alert'

const todos = [
  {
      id: 't1',
      name: 'Do some general house cleaning'
  },
  {
      id: 't2',
      name: 'Go for some shopping '
  },
  {
      id: 't3',
      name: 'Finish my assignments'
  },
  {
      id: 't4',
      name: 'Do my project'
  }

];

function App() {
  const [ list , setList]  = useState(todos);

  const onDeleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);

  };

  const addTodoHandler = (newName) => {
    setList([...list, newName]);

  };

  const clearList = () => {
    setList([])
  }


  return (
    <div className="App">
     <Header />
     <Alert />
     <Input onAddTodo = {addTodoHandler} />
     <List list={list} onDelete={onDeleteHandler} clearAll={clearList}/>
    </div>
  );
}

export default App;
