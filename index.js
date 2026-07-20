console.log("Hello World!");

// 1. let
let age = 20;
age = 21;

console.log(age);

// 2. const
const name = "Haris";

console.log(name);

// 3. Function scope / accessing outer variable
function sayHello() {
  console.log(name);
}

sayHello();

// 4. Function scope
function test() {
  const message = "Hello";
  console.log(message);
}

test();

// 5. Block scope
if (true) {
  let blockAge = 20;
  const blockName = "Haris";

  console.log(blockAge);
  console.log(blockName);
}

// 6. Value type
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// 7. Reference type
const user1 = {
  name: "Haris",
};

const user2 = user1;

user2.name = "Ali";

console.log(user1.name); // Ali
console.log(user2.name); // Ali

// 8. Strict equality
console.log(5 === 5); // true
console.log(5 === "5"); // false

// 9. Falsy value
const emptyName = "";

if (emptyName) {
  console.log("Name exists");
} else {
  console.log("Name is empty");
}

// 10. Truthy value
const userName = "Haris";

if (userName) {
  console.log("Name exists");
}
