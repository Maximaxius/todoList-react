import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { work } from "../utils/works"
import TodoList from "../List/TodoList";

import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";
import NotFound from "../NotFound/NotFound";

import InputField from "../inp/inp"
import InputFieldDel from "../inp/InputFieldDel"



if (localStorage.list) {
  var list = JSON.parse(localStorage.list)          //прибегнул к вару тк конст не давал создать 
}
else {
  var list = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: `${work[(Math.floor((Math.random() * work.length)))]}`,
    completed: Boolean(Math.round(Math.random()))
  }));
}
console.log(list)

function App() {
  const [listState, setList] = useState(list);

  const AddToArray = (newItem) => {
    setList(() => [...listState,newItem]);
    localStorage.list = JSON.stringify(listState);
  };

  const RemoveFromArr = (item) => {
    const name = item;
    setList((list) => list.filter((list) => list.name != name));
    localStorage.list = JSON.stringify(listState);
  };


  return (
    <>
      <Router>
        <HorizontalMenu />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <TodoList todos={listState} />
              </>}
          />
          <Route
            exact
            path="/add"
            element={
              <>
                <InputField onAdd={AddToArray} id={listState.length} />
                <TodoList todos={listState} />
              </>}
          /> 
          <Route
            exact
            path="/del"
            element={
              <>
                <InputFieldDel onDel={RemoveFromArr} />
                <TodoList todos={listState} />
              </>}
          />
          <Route path=":search?" element={<TodoList todos={listState} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
