import logo from './logo.svg';
import './App.css';

function App() {

  const singer = {
    name: "Shimul",
    job: "Singer"
  }
  const singerStyle = {
    backgroundColor: 'red'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={singerStyle}>This is singer {singer.name} and his job is {singer.job}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is Shimul</p>
        <Person name="Rubel" nayika="Mousumi"></Person>
        <Person name="Karim" nayika="Raba"></Person>
        <Person name="Rahim" nayika="Rupban"></Person>

      </header>
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className="Person">
      <h1>Name:{props.name}</h1>
      <h4>Profession:{props.nayika}</h4>
    </div>
  );
}
export default App;
