import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Login from './components/Login';
import Logout from './components/Logout';
import { add } from './features/none/noneSlice';
import { useHome } from './services';

function App() {
  const user = useAppSelector((state) => state.user.value);

  if (!user) {
    return (
      <div className="App">
        <p>Unauthorized</p>
        <Login />
      </div>
    );
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '400px',
          margin: 'auto',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="users">Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
      </Routes>
      <Logout />
    </div>
  );
}

function Home() {
  const { isLoading, data } = useHome();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(add());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>Fail to fetch</p>;

  return (
    <div>
      <p>Home</p>
      {data.map((d) => (
        <p>{d.name}</p>
      ))}
    </div>
  );
}

function About() {
  return <p>About</p>;
}

function Users() {
  return <p>Users</p>;
}

export default App;
