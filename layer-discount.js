  //first100---> 100
  //101 to 200----> 90
  // above 200-----> 70

  function layeredDiscountedTotal(quantity){
    const first100price = 100;
    const second100price = 90;
    const avove200price = 70;

    if(quantity<= 100){
        const total = quantity * first100price;
        return total;
    }

    else if(quantity<=200){
const first100price = 100 * first100price;
const remainingQuantity = quantity - 100;
const remainigTotal = remainingQuantity * second100price;
const total = first100Total + remainigTotal;
return total;
    }
else{
    const first100Total = 100 * first100price;
    const second100price = 100 * second100price;
    const remainingQuantity = quantity - 200;
    const remainigTotal = remainingQuantity * avove200price;
    const total = first100Total + second100Total + remainigTotal;
    return total;
}

  }

  