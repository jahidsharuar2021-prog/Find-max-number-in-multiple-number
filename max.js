const jahid = 40;
const raju = 50;
if (jahid > raju) {
  console.log("jahid will get the stroberry");
} else {
  console.log("raju will get the strawberry");
}

// inside the function

function grater(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const output = grater(45, 50);
const result = grater(60, 70);
const res = (output, result);
console.log(res);

console.log("another example for three number");

//max of tree number

const num1 = 10;
const num2 = 600;
const num3 = 30;
if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num3 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

function threeNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const numbers = threeNumber(10, 30, 50, 3);
console.log('function ar result', numbers);

//useing max function for finding max
const max = Math.max(1, 4, 5, 400, 700);
console.log('bild in function', max);
