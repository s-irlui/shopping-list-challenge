
let shoppingList = [];
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

function clearList() {
    shoppingList = [];   // empty the array
    renderList();        // update UI
}


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

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearList);


const itemInput = document.getElementById("itemInput");
const itemPrice = document.getElementById("itemPrice");
const addBtn = document.getElementById("addBtn");
const shoppingListEl = document.getElementById("shoppingList");

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

        shoppingListEl.appendChild(li);
    });

    
    calculateTotal();
}