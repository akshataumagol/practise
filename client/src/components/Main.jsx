// src/components/Main.jsx
import React from 'react';
import UserTable from '../components/UserTable';
import '../styles/Main.css'; // Optional: import CSS for styling

const Main = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserTable />
    </div>
  );
};

export default Main;
