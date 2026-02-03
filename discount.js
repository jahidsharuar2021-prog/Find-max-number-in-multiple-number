
function discount(price){
    if(price<=100){
       const  mainprice=price*100;
        return mainprice;
    }
    else if(price<=200){
       const price1=price*90;
        return price1;
    }
    else {
       const price2=price*70;
        return price2;
    }
}
const output=discount(201);
console.log(output);