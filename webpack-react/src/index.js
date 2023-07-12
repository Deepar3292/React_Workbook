// const { Book } = require("./Book");
import Book from './Book';
import {map, filter} from './lib';
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles.css';

console.log("Welcome to React!!!");
let b1 = new Book("React in action", 8900.00)
console.log(b1.getData());

let products = [
    {id: 34, name: "Sony Bravia", category: "TV", price: 1000},
    {id: 35, name: "iPhone", category: "mobile", price: 2000},
    {id: 36, name: "One Plus", category: "mobile", price: 3000},
    {id: 37, name: "Macbook", category: "computer", price: 4000},
    {id: 38, name: "LG", category: "TV", price: 5000}
];

let mobiles = filter(products, (p) => p.category === 'mobile');
mobiles.forEach(m => console.log(m));
let names = map(products, p=>p.name);
names.forEach(n => console.log(n))

let welcome = React.createElement("h1", {style: {color: 'red'}}, "Welcome to react world!!");
console.log(welcome);

let root = createRoot(document.getElementById('root'));
root.render(welcome);