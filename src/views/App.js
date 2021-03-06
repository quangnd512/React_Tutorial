import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

// function App() { //function
const App = () => { // Arrow function  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*Component*/}
        <MyComponent />
      </header>
    </div>
  );
}

export default App;