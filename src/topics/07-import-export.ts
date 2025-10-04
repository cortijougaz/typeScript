import {taxCalculations, type Product} from "./06-function-destructuring.ts";

const shoppingCart: Product[] = [
    {description: 'Nokia A1',
        price: 150.0,},
    {description: 'iPad Air',
        price: 250.0,}
];

const [total, tax] = taxCalculations({
    products: shoppingCart,
    tax: 0.15,
});

console.log('Total', total);
console.log('Tax', tax);