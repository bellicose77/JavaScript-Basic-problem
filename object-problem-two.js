const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];


const newObj = {
    item: 'Xbox One X', 
    stock: 2, 
    original: 499.99, 
    discount: 0.1 
}
const calculateSalesTotal = ({stock,original,discount=0.0}) =>{
    const sale = original - discount;
    const total = (original-discount)*stock;
    return [sale,total];

}

const [sale,total] = calculateSalesTotal(newObj);
//console.log(total);
//  const updateData = {
//      sale:sale,
//      total:total
//  }
 updateObj = {
    ...newObj,sale,total
 }
console.log("updateObj",updateObj);
//console.log("first object",newObj)