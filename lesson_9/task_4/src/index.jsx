import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList";


const rootElement = document.querySelector('#root');


const users = [
  {
    id: 'id-0',
    age: 20,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 15,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 39,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 42,
    name: 'Alex',
  },
  {
    id: 'id-5',
    age: 27,
    name: 'Bill',
  },
  {
    id: 'id-6',
    age: 25,
    name: 'John',
  },
  {
    id: 'id-7',
    age: 32,
    name: 'Alice',
  },
];


ReactDOM.render(<UsersList users={users} />, rootElement);