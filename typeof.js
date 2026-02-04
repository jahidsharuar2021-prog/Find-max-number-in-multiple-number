function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "plese enter any number";
  }
  const multiplecation = a * b;
  return multiplecation;
}

const getmultiply = multiply(5, 5);
console.log(getmultiply);

// name related function

function fullname(firstname, lastname) {
  if (typeof firstname !== "string") {
    return "firstname should be string";
  } else if (typeof lastname !== "string") {
    return "lastname should be string";
  }
  return firstname + " " + lastname;
}
const getname = fullname("Jahid", "Hasan");
console.log(getname);

//type of object in function

function gitobj(names) {
  if (typeof names !== "object") {
    return "please enter an array";
  }
  const objprice = names.price;
  return objprice;
}

// const output=gitobj({name:'chulkani molom',price:35,color:'blue'});
const output = gitobj(5);
console.log(output);
// object releted problem in

console.log("check the array type");
function array(numbers) {
  if(Array.isArray(numbers) !==true){
 return 'please enter the any array not others';
  }
  const item = numbers;
  return item;
}
const result = array([1,5,6,7]);
console.log(result);
