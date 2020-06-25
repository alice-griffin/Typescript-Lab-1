var mountains;
mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallest = mountains[0];
    mountains.forEach(function (m) {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
var tallestName = findNameOfTallestMountain(mountains);
console.log(tallestName);
var products;
products = [
    { name: 'keyboard', price: 90.00 },
    { name: 'mouse', price: 45.00 },
    { name: 'monitor', price: 150.00 }
];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    var avg = sum / products.length;
    return avg;
}
var average = calcAverageProductPrice(products);
console.log(average);
var inventory;
inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var i = 0; i < inventory.length; i++) {
        total += inventory[i].product.price * inventory[i].quantity;
    }
    return total;
}
var answer = calcInventoryValue(inventory);
console.log(answer);
