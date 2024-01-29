import React from 'react';
import { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      if (username && password) {
        const response = await fetch('http://projetcloud2024-production.up.railway.app/api/login?email=rak@gmail.com&pwd=aaaa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        const token = responseData.token;

        console.log('Login successful. Token:', token);
      } else {
        setError('Please enter both username and password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };
  return (
    <div>
      
    </div>
  )
}

export default Login
