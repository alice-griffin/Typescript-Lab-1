interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[];

mountains = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
]

function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest: Mountain = mountains[0];
    mountains.forEach(m => {
        if (tallest.height < m.height) {
            tallest = m;
        }
    });
    return tallest.name; 
}

const tallestName = findNameOfTallestMountain(mountains);

console.log(tallestName); 

interface Product {
    name: string;
    price: number;
}

let products: Product[];

products = [
    {name: 'keyboard', price: 90.00},
    {name: 'mouse', price: 45.00},
    {name: 'monitor', price: 150.00}
]

function calcAverageProductPrice(products: Product[]): number {
    let sum = 0; 
    for (let i=0; i < products.length; i++) { 
    sum += products[i].price;
    }
    let avg = sum / products.length; 
    return avg;
}      

let average = calcAverageProductPrice(products);

console.log(average);


interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[];

inventory = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
]

function calcInventoryValue(inventory: InventoryItem[]): number {
    let total = 0;
    for (let i=0; i < inventory.length; i++) {
        total += inventory[i].product.price * inventory[i].quantity; 
    }
    return total; 
}

let answer = calcInventoryValue(inventory);

console.log(answer);