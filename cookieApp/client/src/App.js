import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const handleLogin = async(e) => {
  e.preventDefault();

  const res = await axios.post('https://cookietest-nayeemriddhi.up.railway.app/api/auth/login',{username},
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: "no-cache",
    }
  }, 
  {withCredentials:true}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  console.log(res);

  }
  return (
    <div className="App">
      <label>Username</label>
     <input type="text" 
     name='username' 
     value={username} 
     onChange={(e)=> {setUsername(e.target.value)}}/>

     <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
