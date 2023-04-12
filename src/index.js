import React, { useState } from 'react';
import ReactDOM from "react-dom";

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`The inputted username is: ${username}`)
    console.log(`The inputted password is: ${password}`)
    setUsername('')
    setPassword('')
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type='text' name='username' value={username} onChange={handleUsernameChange} />
        <label htmlFor='password'>Password:</label>
        <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("app"));
