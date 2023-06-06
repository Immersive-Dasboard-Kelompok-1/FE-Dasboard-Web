import React, { useState } from 'react';
import image from "../assets/Image 2196.png";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Logika login Anda di sini
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col sm:flex-row w-screen">
      <div className="hidden sm:flex sm:w-1/2 h-screen bg-primary justify-center items-center">
        <img className="h-1/2 object-cover" src={image} alt="Background" />
      </div>
      <div className="flex sm:w-1/2 h-screen bg-white justify-center items-center">
        <form className="w-96 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className='flex justify-center mb-5'>
            <p className='text-black text-4xl'>Login</p>
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={handleUsernameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleLogin}
              className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
