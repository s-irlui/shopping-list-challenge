let shoppingList = [];

const itemInput = document.getElementById("itemInput");
const itemPrice = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const shoppingListEl = document.getElementById("shoppingList");
const totalCostEl = document.getElementById("totalCost");

// EVENT LISTENERS
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearList);

// ADD ITEM
function addItem() {
    const name = itemInput.value;
    const price = itemPrice.value;

    if (name === "" || price === "") {
        alert("Please enter item and price");
        return;
    }

    const item = {
        name: name,
        price: Number(price),
        purchased: false
    };

    shoppingList.push(item);

    renderList();

    itemInput.value = "";
    itemPrice.value = "";
}

// CLEAR LIST
function clearList() {
    shoppingList = [];
    renderList();
}

// CALCULATE TOTAL
function calculateTotal() {
    let total = 0;

    shoppingList.forEach(item => {
        if (item.purchased) {
            total += item.price;
        }
    });

    totalCostEl.textContent = total;
}

// RENDER LIST
function renderList() {
    shoppingListEl.innerHTML = "";

    shoppingList.forEach((item, index) => {
        const li = document.createElement("li");

        li.textContent = `${item.name} - ${item.price}`;

        
        if (item.purchased) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        }

        
        li.addEventListener("click", function () {
            item.purchased = !item.purchased;
            renderList();
        });

        ✏️
        li.addEventListener("dblclick", function () {
            const newName = prompt("Edit item name:", item.name);

            if (newName !== null && newName.trim() !== "") {
                item.name = newName;
                renderList();
            }
        });

        shoppingListEl.appendChild(li);
    });

    calculateTotal();
}