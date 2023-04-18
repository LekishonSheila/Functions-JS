// Create an array containing the names of all items in the inventory maximum of 10.
let itemNames = ['kales','oranges','pineapples','cabbages','spinach','onions','gingers','ovacado','mango'];

// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let itemQuantities = [10, 20, 30,40,50,60,70,90];


// Write a function to add a new item to the inventory, updating both arrays.
function addItems(name, quantity) {
    if (itemNames.length < 10) {
      itemNames.push(name);
      itemQuantities.push(quantity);
      console.log(`${name} added to inventory with quantity ${quantity}.`);
    } else {
      console.log(`Inventory full, cannot add ${name}.`);
    }
  }
  addItems('berries', 85);
console.log(itemNames);

// Write a function to update the stock quantity of an existing item.
function updatedQuantity(name, quantity) {
    let index = itemNames.indexOf(name);
    if (index !== -1) {
      itemQuantities[index] = quantity;
      console.log(`Quantity of ${name} updated to ${quantity}.`);
    } else {
      console.log(`${name} not found in inventory of iteims.`);
    }
  }
  console.log(itemQuantities);
updatedQuantity('oranges', 20);

// Write a function to calculate the total number of items in the inventory.
function TotalItems() {
    let totalItems = 0;
    for (let i = 0; i < itemQuantities.length; i++) {
      totalItems += itemQuantities[i];
    }
    return totalItems;
  }
  // Write a function to find the item with the lowest stock quantity.
  function LowestItem (){
    if(stockQuantities.length>0){
      const minQuantities=Math.max(...stockQuanties);
      const index=stockQuantities.indexOf(minQuantities);
      return inventory[index];
    }else{
      console.log("No item in inventory")
    }
  }


  
