
import './App.css';
import Input from './components/Input';

function App() {

  const addTodoHandler = (newName) => {
    

  }
  return (
    <div className="App">
     <Input onAddTodo = {addTodoHandler} />
    </div>
  );
}

export default App;
