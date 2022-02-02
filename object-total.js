const phones = [
    { name: "Apple", price: 162000, camera: 12, storage: 128, quantity: 0 },
    { name: "Samsung", price: 110000, camera: 108, storage: 256, quantity: 1 },
    { name: "OnePlus", price: 80000, camera: 48, storage: 256, quantity: 1 },
    { name: "Huawei", price: 75000, camera: 12, storage: 256, quantity: 9 },
    { name: "Xiaomi", price: 65000, camera: 108, storage: 512, quantity: 2 },
    { name: "Realme", price: 48000, camera: 108, storage: 512, quantity: 5 },
    { name: "Oppo", price: 450000, camera: 108, storage: 256, quantity: 4 }
];
let totalPrice = 0;
for (const phone of phones) {

    totalPrice = totalPrice + (phone.price * phone.quantity);
}
console.log(totalPrice);