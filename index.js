// console.log("Aditya");

const name = "Aditya";
let id = 121;
let age = 20;
let isMale = true;


// console.table([name, id, age, isMale])

// console.log(typeof NaN)
// console.log(typeof(undefined))
// console.log(typeof Number(isMale)+" "+ Number(isMale));

let MAX = 70
let MIN = 60

// console.log(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);


let a = [1, 2, 3, 4, 5]
let b = a
// console.log(b)
// a[0] = 100
// console.log(b)
// b[1] = 200
// console.log(a)
// a = [4, 5, 6, 7, 8]
// console.log(b, a)

// console.log(this);


let num = [3, 1, 2, 10, 1];

// newNum = num.reduce((acc, cur, arr)=> (acc + cur), 0)
// console.log(newNum)

// num.forEach((num) => {
//     let sum = 0
//     sum += num
//     console.log(sum);
// })

// let sum = 0;
// for(let i = 0; i < num.length; i++){
//      sum = sum + num[i]
//      num[i] = sum
// }

// console.log(num);


// console.log(Object.getOwnPropertyDescriptors(Math, "PI"))
// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: true,
//     configurable: true

// })

// const foo = () => {
//     console.log(this.name);
// }

// foo.call({ name: "Aditya" })

// const foo1 = function () {
//     console.log(this.name);
// }

// foo.call({ name: "Aditya" })

// console.log(typeof NaN);
// console.log(Object.entries({ name: "Aditya", age: "20" }));

let map = new Map([
    ["name", "Aditya"],
    ["age", 20]
]);

map.set(0, false)

// console.log(map);
// console.log(map.size);
// console.log(map.has(0));
// console.log(map.get(0));
map.clear()

// for (x of map) {
//     console.log(x[0]);
// }

map.delete("name");
// console.log(map);

const data = new Set(["name", "age", "isMale", "name"]);
// console.log(data.size);

// console.log(data);

let s = ''
for (i = 0; i < 5; i++) {
    s += '*'
    console.log(s);
}
