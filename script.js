const totalCostEl = document.getElementById("totalCost");


function calculateTotal() {
    let total = 0;

    shoppingList.forEach(item => {
        if (item.purchased) {
            total += item.price;
        }
    });

    totalCostEl.textContent = total;
}
let shoppingList = [];

// Get elements
const itemInput = document.getElementById("itemInput");
const itemPrice = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const shoppingListEl = document.getElementById("shoppingList");