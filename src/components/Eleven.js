import React, { useState, useEffect } from 'react';

export default function Eleven() {
  const [isLogin, setIsLogin] = useState(false);
  const [auth, setAuth] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
    setEmail('');
    setPassword('');
  };

  const handleAuth = (e) => {
    e.preventDefault(); // Prevent form submission
    if (auth) {
      const findUser = users.find((user) => user.email === email && user.password === password);
      if (findUser) {
        setIsLogin(true);
      } else {
        alert('User not found');
      }
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setAuth(true);
      setIsLogin(true); // Automatically login after registration
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {isLogin ? (
        <div>
          <h1>Welcome, {email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleAuth}>
            <h1>{auth ? 'Login' : 'Register'}</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">{auth ? 'Login' : 'Register'}</button>
            <br />
            {auth ? (
              <p>
                Don't have an account? <span onClick={() => setAuth(!auth)}>Register</span>
              </p>
            ) : (
              <p>
                Already have an account? <span onClick={() => setAuth(!auth)}>Login</span>
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
