import './App.css';


function Header(){
  return(
      <>
        <h2>Hello</h2>
        <Tittle/>
      </>
  )
}
function Container(){
  return(
      <>
        <h2>Good day</h2>
        <Tittle/>
      </>
  )
}
function Footer(){
  return(
      <>
        <h2>Hello world </h2>
        <Tittle/>
      </>
  )
}
function Tittle(){
  return(
      <>
        <p>the weather is good tomorrow</p>
      </>
  )
}
function App() {
  return (
      <div className="App">
        <Header/>
        <h3>-</h3>
        <Container/>
        <h3>-</h3>
        <Footer/>
      </div>
  );
}


export default App;
