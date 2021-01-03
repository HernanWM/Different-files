"use strict"

let a = ('string' * 9);
console.log(a);

let number = (4/0);
console.log(number);

let und;
console.log(und);

//Object

const obj = {
    name : "Hernan",
    age : 25,
    statusMarried: false
};

console.log(obj.age);
console.log(obj["name"]); //Also you can use '[]' instead dots

let arr = ['first.jpg', 'secong', 77, {}, []];
console.log(arr[3]);
