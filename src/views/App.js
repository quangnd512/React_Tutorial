import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import InputLogin from './Example/InputLogin';

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
        {/*<MyComponent />*/}
         <InputLogin />
      </header>
    </div>
  );
}

export default App;