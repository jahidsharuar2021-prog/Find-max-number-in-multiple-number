
const guest=[
    {name:'shampo',price:100},
    {name:'pant',price:1200},
    {name:'shirt',price:500},
    {name:'gamsha',price:200}

];
function guestdemand(items){
 let sum=0;
    for(const item of items){
        sum=sum+item.price;
    }
    return sum;
}
const total_ouptut=guestdemand(guest);
console.log(total_ouptut);