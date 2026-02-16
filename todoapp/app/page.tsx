"use client"
import { type ChangeEventHandler, useState } from 'react'

interface TodoFromProps {
  addTodo: (todo: string) => void;
}

const TodoForm = ({addTodo} : TodoFromProps) => {
   const [todo, setTodo] = useState('');

   const handleTodoFormChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value)
  }

  const handleAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <h1>Todo Form</h1>
      <input type="text" onChange={handleTodoFormChanged} value={todo} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

interface Todo {
  id: number,
  content: string;
}

interface TodoListProps{
  todos: Todo[];
}

const TodoList = ({todos} : TodoListProps) => {
  return (
    <>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.content}</li>)
        }
      </ul>
    </>
  );
};

const IndexPage = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Todo#1' },
    { id: 2, content: 'Todo#2' },
    { id: 3, content: 'Todo#3' },
  ])

  const addTodo = (todo: string) => {
    setTodos([{ id: todos.length + 1, content: todo}, ...todos]);
  }

  return (
    <>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </>
  )
};
export default IndexPage;