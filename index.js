// ==================================================VARIABLE===========================================================
//ES5
/*
var names = ['Bimo', 'Haikal', 'Anugrah'];
var counter = 10;
counter = 5;
console.log(counter);

function sayName() {
    var name = "bim";
    console.log(name);
}

sayName();
*/


//ES6
/*
let todoList = ['Susu', 'Kopi'];
console.log(todoList);
todoList[0] = 'Milk';
// todoList = ['Milk'];
todoList = ['Milk'];

console.log(todoList);


const list = [1,2,3,4,5,6];

for(let i = 1; i < list.length; i++) {
    console.log(i);
}

console.log(i);

*/

// ==================================================STRING CONCATENATION===========================================================
// ES5
/*
var name = "Ponski";
console.log('Hello my name is ' + name);
//ES6
const name = "Ponski";
console.log(`Hello my name is ${name}`)
*/

// ==================================================OBJECT LITERALS==========================================================
//ES5
/*
function addProduct(name, category) {
    return {
        nama: name,
        kategori: category
    }
}

var product = addProduct('gundam', 'mainan');
console.log(product);
*/

//ES6
/*
function addProduct(name, category) {
    return {
        name,
        category
    }
}

const product = addProduct('gundam', 'mainan');
console.log(product);
*/

// ==================================================OBJECT DECONSTRUCTION==========================================================
//ES5
/*
var user = {
    name: 'Ponski',
    age: 80
}

var myName = user.name;
var myAge = user.age;
console.log(`Hello my name is ${myName}, I'am ${myAge} years old`);
*/

//ES6
/*
const list = {
    activity: 'Shopping',
    items: ['Milk', 'Fruits']
}

const {activity, items} = list;
console.log(activity, items);
*/

// ==================================================ARROW FUNCTION==========================================================
//ES5
/*
function sayName() {
    console.log('Hello I am Ponski');
}

function sayAge() {
    console.log('Rahasia')
}

sayName();
sayAge();
*/

//ES6
/*
const sayLocation = () => {
    console.log('Jakarta');
}

const sayArea = (area) => {
    console.log(`${area}`);
}

sayLocation();
sayArea('Tebet');
 */

// ==================================================ARROW FUNCTION II==========================================================
//ES5
/*
var user = {
    first: 'Ponski',
    last: 'Wadimor',
    age: 80,
    sayPonski: function() {
        console.log(`Nama saya ${this.first}`);
        var that = this;
        var fullName = function() {
            console.log(`Nama panjang saya ${that.first} ${that.last}`)
        }
        fullName();
    }
}

user.sayPonski();
*/

//ES6
/*
const user = {
    first: 'Ponski',
    last: 'Wadimor',
    sayPonski: function() {
        console.log(`Nama saya ${this.first}`);
        var fullName = () => {
            console.log(`Nama panjang saya ${this.first} ${this.last}`)
        }
        fullName();
    }
}

user.sayPonski();
*/

// ==================================================DEFAULT PARAMETERS==========================================================
//ES5
/*
function penjumlahan(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log(a+b);
}

penjumlahan(20,30);
*/

//ES6
/*
const perkalian = (x=1, y=1) => {
    console.log(x*y);
}

perkalian(20,30);
*/

// ==================================================ARRAY FUNCTION==========================================================
/*
const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Choco'];

//foreach
shoppingList.forEach((product, index) => {
    console.log(`Product no.${index + 1} is ${product}`);
})
*/

// ==================================================MAP FILTER==========================================================
/*
const shoppingList = ['Susu', 'Beras', 'Mie', 'Pasta Gigi', 'Pulsa'];

const newList = shoppingList.map(item => item + 'new');
// console.log(newList);

const filterList = shoppingList.filter(item => item !== 'Susu');
console.log(filterList);
*/

// ==================================================CONSTRUCTION FUNCTION==========================================================
//ES5
/*
function Person(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
}

function Ponski(occupation, hobbys, name, age, hairColor) {
    Person.call(this, name, age, hairColor);
    this.occupation = occupation;
    this.hobbys = hobbys;
}

Ponski.prototype = Object.create(Person.prototype);

const person = new Ponski("Dev", "eat", 'ponski', 80, 'Blue');
console.log(person);
person.sayName();
*/

//ES6
/*
class shoppingList {
    constructor(items, nr) {
        this.items = items;
        this.nr = nr;
    }
    sayList() {
        console.log(this.items)
    }
}

const myList = new shoppingList(['Milk', 'Choco', 'Strawberry'], 3);
// console.log(myList);
// myList.sayList();

class Product extends shoppingList {
    constructor(items, nr, ammount, cost) {
        super(items, nr);
        this.ammount = ammount;
        this.cost = cost;
    }
}

const product = new Product(['Choco', 'Guava', 'Berry'], 3, 2, 20);
product.sayList();
*/

