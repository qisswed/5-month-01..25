import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
        <MainPage/>
        <TaskList/>
      {/*<ContactsPage/>*/}
    </div>
  );
}

export default App;
