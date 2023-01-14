import logo from './logo.svg';
import './App.css';

function App() {
  function login(e){
    e.preventDefault();
    const data = {
      email:e.target.email.value,
      password:e.target.password.value
    }
    fetch("http://localhost:8080/auth/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={login}>
            <input type="text" id="email"/>
            <input type="text" id="password"/>
            <button type='submit'>Login</button>
        </form>
        
      </header>
    </div>
  );
}

export default App;
