let x=5;
let y=x;
x=10;
console.log(x);
console.log(y);

let obj1={name:"Alice"};
let obj2=obj1;
obj1.name="Bob";
console.log(obj1.name);
console.log(obj2.name);

let a="hello";
let b=42;
let c=true;
let d={key:"value"};
let e=null;
let f=undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

let numbers=[10,20,30,40,50];
console.log(numbers[2]);
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

let fruits=["apple","banana","mango"];
fruits[1]="orange";
console.log(fruits);

let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[1][2]);
console.log(matrix[2][0]);

let person={name:"John",age:25,city:"New York"};
console.log(person.name);
console.log(person.age);

let car={make:"Toyato",model:"Cornolla",year:2021};
console.log(car["make"]);
console.log(car["model"]);

let book={title:"The Great Gatsby",author:"F.Scott Fitzgerald"};
book.author="Anonymous";
console.log(book.author);

let student={name:"Alice",grade:"A"};
student.age=20;
console.log(student);
