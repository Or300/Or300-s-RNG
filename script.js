// Function to generate a random item with a delay
function generateRandomItem() {
    document.getElementById('randomNumber').textContent = "Rolling...";
    document.getElementById('itemName').textContent = "Rolling...";

    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 16) + 1;
        let itemName = "";

        if (randomNum >= 1 && randomNum <= 4) {
            itemName = "Common";
        } else if (randomNum >= 5 && randomNum <= 7) {
            itemName = "Uncommon";
        } else if (randomNum >= 8 && randomNum <= 12) {
            itemName = "Rare";
        } else if (randomNum >= 13 && randomNum <= 16) {
            itemName = "Epic";
        }

        document.getElementById('randomNumber').textContent = `Number: ${randomNum}`;
        document.getElementById('itemName').textContent = `Item: ${itemName}`;

        addItemToInventory(itemName);
    }, 1000); // Wait 1 second before revealing the result
}

// Function to add an item to the inventory list
function addItemToInventory(item) {
    const inventoryList = document.getElementById('inventoryList');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
}

// Toggle inventory visibility
document.getElementById('toggleInventory').addEventListener('click', function () {
    document.getElementById('inventory').classList.toggle('hidden');
});
