// Function to generate a random item based on the random number
function generateRandomItem() {
    // Generate a random number between 1 and 16
    let randomNum = Math.floor(Math.random() * 16) + 1;
    let itemName = "";

    // Determine item category based on random number
    if (randomNum >= 1 && randomNum <= 4) {
        itemName = "Common";
    } else if (randomNum >= 5 && randomNum <= 7) {
        itemName = "Uncommon";
    } else if (randomNum >= 8 && randomNum <= 12) {
        itemName = "Rare";
    } else if (randomNum >= 13 && randomNum <= 16) {
        itemName = "Epic";
    }

    // Update the number and item name on the page
    document.getElementById('randomNumber').textContent = `Number: ${randomNum}`;
    document.getElementById('itemName').textContent = `Item: ${itemName}`;

    // Add the item to the inventory
    addItemToInventory(itemName);
}

// Function to add an item to the inventory list
function addItemToInventory(item) {
    const inventoryList = document.getElementById('inventoryList');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
}
