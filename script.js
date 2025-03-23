// Function to generate a random item with a delay
function generateRandomItem() {
    document.getElementById('randomNumber').textContent = "Rolling...";
    document.getElementById('itemName').textContent = "Rolling...";

    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 10000) + 1;
        let itemName = getItemFromNumber(randomNum);

        document.getElementById('randomNumber').textContent = `Number: ${randomNum}`;
        document.getElementById('itemName').textContent = `Item: ${itemName}`;

        addItemToInventory(itemName);
    }, 1000); // Wait 1 second before revealing the result
}

// Function to determine item based on number range
function getItemFromNumber(num) {
    if (num >= 1 && num <= 4) return "Common";
    if (num >= 5 && num <= 7) return "Uncommon";
    if (num >= 8 && num <= 12) return "Rare";
    if (num >= 13 && num <= 16) return "Epic";
    if (num >= 17 && num <= 24) return "Amethyst";
    if (num >= 25 && num <= 32) return "Golden";
    if (num >= 33 && num <= 44) return "Emerald";

    // Continue creating new tiers until 10,000
    if (num >= 45 && num <= 100) return "Sapphire";
    if (num >= 101 && num <= 250) return "Ruby";
    if (num >= 251 && num <= 500) return "Diamond";
    if (num >= 501 && num <= 1000) return "Obsidian";
    if (num >= 1001 && num <= 2000) return "Dragonstone";
    if (num >= 2001 && num <= 5000) return "Celestial Crystal";
    if (num >= 5001 && num <= 7500) return "Dark Matter Shard";
    if (num >= 7501 && num <= 9999) return "Ethereal Relic";
    return "Godly Artifact"; // 10,000 is the rarest
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
    const inventory = document.getElementById('inventory');
    inventory.classList.toggle('hidden');
});
