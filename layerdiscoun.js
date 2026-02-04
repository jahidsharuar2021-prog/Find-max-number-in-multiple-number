function layerdiscountedtotal(quantity){
    const firsthundred=100;
    const secondhundred=90;
    const thirdhundred=70;
    if(quantity<=100){
        const price=quantity*firsthundred;
        return price;
    }
    else if(quantity<=200){
        const firstdiscount=firsthundred*100;
        const secondquantity=quantity-100;
        const secondprice=secondquantity*90;
        const discount=firstdiscount+secondprice;
        return discount;
    }
    else{
        const firstchar=100*firsthundred;
        const secondchar=100*secondhundred;
        const thirdquan=quantity-200;
        const thirdchar=thirdquan*70;
        const discount=firstchar+secondchar+thirdchar;
        return discount;
    }
}
const item=layerdiscountedtotal(300);
console.log(item);