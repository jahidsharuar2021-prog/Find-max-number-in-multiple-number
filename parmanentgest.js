
const guest=[
    {name:'shampo',price:100 ,quantity:1},
    {name:'pant',price:1200  ,quantity:2},
    {name:'shirt',price:500  ,quantity:3},
    {name:'gamsha',price:200 ,quantity:4}
];

function guestdemand(items){
 let sum=0;
    for(const item of items){
       const productquantity=item.price*item.quantity;
        sum=sum+productquantity;
    }
    return sum;
}
const total_ouptut=guestdemand(guest);
console.log(total_ouptut);