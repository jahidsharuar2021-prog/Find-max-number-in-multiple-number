
function multiply(a,b){
    if(typeof a !=='number'||typeof b !=='number'){
        return ("plese enter any number");
    }
    const multiplecation=a*b;
    return multiplecation;
}

const getmultiply=multiply(5,5);
console.log(getmultiply);

// name related function 

function fullname(firstname,lastname){

    if(typeof firstname !=='string'){
        return 'firstname should be string';
    }
    else if(typeof lastname !=='string'){
        return 'lastname should be string';
    }
    return firstname+" "+lastname;
}
const getname=fullname('Jahid','Hasan');
console.log(getname);