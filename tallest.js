const num=[33,55,66,200,99];

function tallest(number){
    let max=number[0];
    for(const num of number){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const output=tallest(num);
console.log('lowest number is =', output);


console.log('another example for paractice');
const num1=[33,55,66,200,99];

function smallest(number){
    let min=number[0];
    for(const num of number){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const output1=smallest(num1);
console.log('smallest number is=', output1);