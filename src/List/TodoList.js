import React from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Todo";
import "./style.css";


const filterTodos = (
  todos,
  { completed }
) => {
  if (completed) todos = filterByCompleted(todos, completed);
  return todos;
};

const filterByCompleted = (todos, completed) => {
  console.log(todos)
  return todos.filter((todo) => String(todo.completed) === completed);
};


const TodoList = ({ todos }) => {
  const [searchParams] = useSearchParams();
  const completed = searchParams.get("completed");

  todos = filterTodos(todos, {
    completed
  });

  return (
    
      <div className="list">
        {todos.map((todo) => (
          <Product key={todo.id} product={todo} />
        ))}
      </div>
  );
};

export default TodoList;
