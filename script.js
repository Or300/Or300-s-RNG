// Function to generate a random item with a delay
function generateRandomItem() {
    document.getElementById('randomNumber').textContent = "Rolling...";
    document.getElementById('itemName').textContent = "Rolling...";

    setTimeout(() => {
        let randomNum = getWeightedRandom();
        let itemName = getItemFromNumber(randomNum);

        document.getElementById('randomNumber').textContent = `Number: ${randomNum}`;
        document.getElementById('itemName').textContent = `Item: ${itemName}`;

        if (itemName !== "Nothing") {
            addItemToInventory(itemName);
        }
    }, 1000); // Wait 1 second before revealing the result
}

// Function to generate a weighted random number
function getWeightedRandom() {
    let base = Math.random();
    return Math.floor(Math.pow(base, 2.5) * 10000) + 1; 
    // The exponent (2.5) controls how rare high numbers are
}

// Function to determine item based on number range
function getItemFromNumber(num) {
    if (num >= 1 && num <= 4) return "Common";
    if (num >= 5 && num <= 7) return "Uncommon";
    if (num >= 8 && num <= 12) return "Rare";
    if (num >= 13 && num <= 16) return "Epic";
    if (num >= 17 && num <= 24) return "Amethyst";

    // Everything beyond Amethyst needs a specific number
    const exactMatches = {
        25: "Golden",
        32: "Emerald",
        44: "Sapphire",
        100: "Ruby",
        250: "Diamond",
        500: "Obsidian",
        1000: "Dragonstone",
        2000: "Celestial Crystal",
        5000: "Dark Matter Shard",
        7500: "Ethereal Relic",
        10000: "Godly Artifact"
    };

    return exactMatches[num] || "Nothing";
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
