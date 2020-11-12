import { useState } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState()

  return (
    <div className="App">
      { !token ? <div>Show form</div> : <div>Hello from Twilio</div>}
    </div>
  );
}

export default App;
