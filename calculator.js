
// calculator design using function 

function additon(a,b){
    const add=a+b;
    return add;
}
function substraction(a,b){
    const sub=a-b;
    return sub;
}
function multiplecation(a,b){
    const multiply=a*b;
    return multiply;
}
function division (a,b){
    const div=a/b;
    return div;
}
function calculator(a,b,operation){
    if(operation==='add'){
        const result=additon(a,b);
        return result;
    }
    else if(operation==='sub'){
        const result=substraction(a,b);
        return result;
    }
    else if(operation==='multiply'){
        const result=multiplecation(a,b);
        return result;
    }
    else if(operation==='div'){
        const result=division(a,b);
        return result;
    }
    else{
        
        return "only 'sum','sub','multiply','div'";
    }
}
const output=calculator(5,5,'multiply');
console.log(output);