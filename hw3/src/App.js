import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Todo from "./components/todo/Todo";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <MainPage/>
              <AboutPage/>
              <Todo/>
          </div>
      </header>
    </div>
  );
}

export default App;
