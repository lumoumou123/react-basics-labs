import './App.css';
import Task from './components/Task';
function App() {
  return (
    <div className="container">
       <h1> Tasky </h1>
      <Task title="Dishes" deadline="Today">
      Fold laundry and put away
      </Task>
      <Task title="Laundry" deadline="Tomorrow" >
      </Task>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
