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
// map.clear()

// for (x of map) {
//     console.log(x[0]);
// }

map.delete("name");
// console.log(map);

const data = new Set(["name", "age", "isMale", "name"]);
// console.log(data.size);

// console.log(data);

// let s = ''
// for (i = 0; i < 5; i++) {
//     s += '*'
//     console.log(s);
// }

let reverse = function (arr) {
    let start = 0, end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp

        start++;
        end--
    }

    return arr;
}

// var addTwoNumbers = function (l1, l2) {

//     // let num1 = Number(reverse(l1).join(''));
//     // let num2 = Number(reverse(l2).join(''));

//     let newl1 = reverse(l1)
//     let newl2 = reverse(l2)

//     let revl1 = '', revl2 = '';
//     for (let i = 0; i < l1.length; i++) {
//         revl1 = revl1 + String(l1[i])
//     }
//     for (let i = 0; i < l2.length; i++) {
//         revl2 = revl2 + String(l2[i])
//     }

//     let num1 = Number(revl1)
//     let num2 = Number(revl2)

//     let sum = num1 + num2;
//     // let result = String(sum).split('').map(Number);
//     let result = []
//     for (let i = 0; i < String(sum).length; i++) {
//         result[i] = String(sum)[i]
//     }

//     result = reverse(result);
//     let newResult = []
//     for (i = 0; i < result.length; i++) {
//         newResult[i] = Number(result[i])
//     }

//     return newResult;

// };

// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];

// console.log(addTwoNumbers(l1, l2));


//param A : array of integers
//return an integer

// let str = ''
// let space = ' '
// let n = 5
// for (let i = 1; i <= n; i++) {
//     str = str + '*'
//     space = space
//     console.log(space + str);
// }


// function hole(arr, H) {
//     let count = 0;

//     for (let i = 1; i < arr.length; i++) {
//         let holesRequired = arr[i];

//         if (holesRequired <= H) {
//             if (holesRequired % 2 === 0 && H % 2 === 0) {
//                 // If both the holesRequired and H are even, reduce holesRequired by 1 due to the glitch
//                 holesRequired -= 1;
//             }

//             if (holesRequired <= H) {
//                 H -= holesRequired;
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// console.log(hole([5, 2, 5, 6, 1, 7], 13)); // Output: 4

// let n = 5;
// let result = '';


// for (let rows = 0; rows < n; rows++) {
//     for (let columns = 0; columns < n - rows; columns++) {
//         process.stdout.write('*')
//     }
//     console.log();
// }

// for (let rows = 0; rows < n; rows++) {
//     for (let columns = 0; columns < n - rows; columns++) {
//         result = result + '*'
//     }
//     result = result + '\n'
// }

// console.log(result);



let n = 5;
let result = ''

// for (let row = 1; row <= n; row++) {
//     for (let column = 1; column <= row; column++) {
//         result += column
//     }
//     result += '\n'
// }

// for (let row = 1; row <= 2 * n - 1; row++) {

//     let col = row <= n ? row : 2 * n - row;

//     for (let column = 1; column <= col; column++) {
//         result += '*'
//     }
//     result += '\n'
// }

// for (let row = 1; row <= 2 * n - 1; row++) {

//     let totalColsInRow = row <= n ? row : 2 * n - row;
//     let noOfSpace = n - totalColsInRow;

//     for (let space = 1; space <= noOfSpace; space++) {
//         result += ' '
//     }

//     for (let column = 1; column <= totalColsInRow; column++) {
//         result += '* '
//     }
//     result += '\n'
// }


// for (let row = 1; row <= n; row++) {

//     let noOfSpace = n - row;

//     for (let space = 1; space <= noOfSpace; space++) {
//         result += ' '
//     }

//     for (let column = 1; column <= row; column + 2) {
//         result +=  '* '
//     }
//     result += '\n'
// }

// console.log(result);


// let str = 'Hello I am Aditya Singh Rajawat'

// let newStr = str.split(' ').map((ele) => (
//     ele.split('').reverse().join('')
// ));

// console.log(newStr);

// let p = (n) => {
//     if (n !== 0) {
//         p(n - 1);
//         console.log(n);
//     }
// }

// p(5);

// console.log(1342 / 10 % 10);

// let arr = [10, 30, 23, 34, 54, 65];

// for (let i in arr) {
//     console.log(i);
// }


// console.log(036 / 1);

// console.log(Number((" ")));


// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);

// console.log(head);

// let dummy = head;
// console.log(dummy);

// dummy.next = new ListNode(5);
// console.log(dummy);
// console.log(head);

let arr = [1, 2, 3, 4, 8, 5, 6, 7, 8, 9];
// let k = 3;
// let res = [];
// let left = 0;
// let right = arr.length - 1;
// while (left <= right) {
//     if (left === right) {
//         res.push(arr[left]);
//         break;

//     } else {
//         res.push(arr[left]);
//         res.push(arr[right]);
//     }
//     left++;
//     right--;
// }
// console.log(res);

// console.log("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT".substring(0, 9));
// arr.sort((a, b) => a - b);
// console.log(arr);
// let no = arr.slice(0)
// console.log(no);
// no[2] = 5
// console.log(no);
// console.log(arr);

// let m = 10 >> 5;
// console.log(m);

console.log(10 > 5);




