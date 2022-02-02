const phones = [
    { name: "Apple", price: 162000, camera: 12, storage: 128 },
    { name: "Samsung", price: 110000, camera: 108, storage: 256 },
    { name: "OnePlus", price: 80000, camera: 48, storage: 256 },
    { name: "Huawei", price: 75000, camera: 12, storage: 256 },
    { name: "Xiaomi", price: 65000, camera: 108, storage: 512 },
    { name: "Realme", price: 48000, camera: 108, storage: 512 },
    { name: "Oppo", price: 450000, camera: 108, storage: 256 }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);