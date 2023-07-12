// in commonJS one file is one module, all members are private by default

// function Item() {

// }

// function Book(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Book.prototype.getData = function() {
//     return this.name + ", " + this.price;
// }

// module.exports = {
//     Book
// }

// ES6 module system
export default class Book {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}