
import './App.css';
import Input from './components/Input';
import List from './components/List';

function App() {

  const addTodoHandler = (newName) => {
    console.log(newName)


  }
  return (
    <div className="App">
     <Input onAddTodo = {addTodoHandler} />
     <List />
    </div>
  );
}

export default App;
