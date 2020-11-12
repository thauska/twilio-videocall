import { useState } from 'react';
import './App.css';
import Signin from './components/Signin';

function App() {
  const [token, setToken] = useState()

  return (
    <div className="App">
      { !token ? <Signin setToken={setToken} /> : <div>Hello from Twilio</div>}
    </div>
  );
}

export default App;
