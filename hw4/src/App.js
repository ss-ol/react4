
import './App.css';
import {useEffect, useState} from "react";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const name = prompt('Введите ваше имя');
    const lastName = prompt('Введите вашу фамилию')

    handleUserSubmit({name, lastName});
  },[]);
  const handleUserSubmit =({name, lastName}) => {
    if(name === 'John' && lastName === 'Johns'){
      setUser({name,lastName});
      setError(false);
    } else {
      setUser({name,lastName});
      setError(true);
    }
  }
  return(
      <div>
        {user && error && <MainPage user={user}/>}
        {error && <ErrorPage user={user}/>}
      </div>
  )
}

export default App;
