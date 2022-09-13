const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  const calculateSalesTotal = (sales) =>{
    let updatedSale=sales.map(sale=>{
        const{stock,original,discount=0.0} = sale;
        // sale['sale'] = original - discount;
        // sale['total'] = (original-discount)* stock;
        const salex = original - discount;
        const total = (original-discount)* stock;
        const update ={
            ...sale,salex,total
        }
        return update;
    });
    return updatedSale

  }
 const updateSale = calculateSalesTotal(sales);
 console.log(updateSale);
 console.log(sales)