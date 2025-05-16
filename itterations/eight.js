const mynums = [1,2,3]

// const mytotals = mynums.reduce(function (acc,curval){
//     console.log(`acc : ${acc} and curval: ${curval}`);
//       return acc+curval
// },0)

const mytotals = mynums.reduce((acc,curv)=> acc+curv,0)

// console.log(mytotals);

const shoppingcart = [{
    itemname:"js course",
    price: 2999
},
{
    itemname: "python",
    price:999
},
{
    itemname:"data science",
    price: 12999
}
]

const pricetopay =shoppingcart.reduce((acc,item)=> acc + item.price,0)

console.log(pricetopay);
