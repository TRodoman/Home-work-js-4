// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.

const sum = (a) => {
  return a + a;
};
const sub = (a) => {
    return a - 3;
};

const square = (a) => {
    return a * a;
};

function map(fn, array){
    var newArray = [];
    for(var i=0; i<array.length; i++){
        newArray[i] = fn(array[i]);
    }
    return newArray;
}

console.log(map(sum,[1, 2, 3, 4]));
console.log(map(sub,[7, 9]));
console.log(map(square,[1, 2, 3, 4]));

// -----------------------------------------------------------------------------------

// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }


let age = prompt("Сколько Вам лет?", 18);

let message = (age > 18) ? () => alert("Добро пожаловать!") : () => confirm("Родители разрешили?");

console.log(message());
