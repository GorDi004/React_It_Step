import style from './App.module.scss'
import Task1 from './components/Task1';
const App = () => {
  return (
    <div className="App">
      <Task1/>
      {/* task2 і task3 в середині task1 */}
    </div>
  );
}

export default App;
