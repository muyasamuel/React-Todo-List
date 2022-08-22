
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

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

  const addTodoHandler = (newName) => {
    console.log(newName);
   


  }
  return (
    <div className="App">
     <Input onAddTodo = {addTodoHandler} />
     <List list={list} />
    </div>
  );
}

export default App;
