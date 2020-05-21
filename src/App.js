import React from 'react';

import './global.css';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}