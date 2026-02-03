

const cheap=[
    {name:'samsung',price:20000,camera:'50px',color:'black'},
    {name:'Iphone',price:100000,camera:'50px',color:'black'},
    {name:'shaomi',price:18000,camera:'12px',color:'black'},
    {name:'mi',price:20000,camera:'50px',color:'black'},
    {name:'Nokeya',price:1900,camera:'50px',color:'black'}
];

function cheaperphone(number){
    let min=number[0];
    for(const num of number){
        console.log(num);
        if(num.price<min.price){
            min=num;
        }
    }
    return min;
}
const pricecheap=cheaperphone(cheap);
console.log('cheaper phone price=' ,pricecheap);