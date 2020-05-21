import React, { useState } from 'react';
import './styles.css';

export default function ListTodos() {

  let [todoList, setTodoList] = useState([]);
  let [todo, setTodo] = useState('');
  let [newTodo, setNewTodo] = useState({});

  function toggleEnter(e) {
    if (e.key === 'Enter') {
      addTodo(e);
    }
  }

  function toggleComplete(id) {
    console.log('item a ser concluido: ' + id);
    let complete = todoList.filter((item) => {
      return (item.id !== id);
    });

    setTodoList(todoList = complete);
  }


  function addTodo(e) {
    e.preventDefault();
    if (todo !== '') {
      setNewTodo(newTodo = {
        id: Date.now(),
        text: todo,
      });
      setTodoList(todoList = [...todoList, newTodo]);
      setTodo(todo = '');
      document.getElementById('todoInput').focus();
    } else {
      alert('A tarefa precisa conter um nome!');
      document.getElementById('todoInput').focus();
    }
  }

  return (
    <div className="list">
      <header>
        <strong className="logo">Lista de Tarefas</strong>
      </header>

      <form className="todoList">
        <input id="todoInput"
          className="inputTodo"
          placeholder="Cadastrar tarefa"
          onChange={(e) => { setTodo(todo = e.target.value) }}
          value={todo}
          onKeyDown={(e) => { toggleEnter(e) }}
          autoComplete="off"
        // mais funções
        />
      </form>

      <div className="tarefas">
        <h1>Tarefas</h1>
        <h5 onClick={() => { console.log(todoList) }}>Log do array</h5>

        <ul>

          {todoList.map((item) => {

            return (
              <li key={item.id}>
                <div>
                  <div className={'checkbox'} onClick={() => { toggleComplete(item.id) }}>
                  </div>
                </div>
                {item.text}
              </li>
            );


          })}

        </ul>
      </div>
    </div>

  );
}