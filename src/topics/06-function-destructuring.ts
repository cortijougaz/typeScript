
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

function taxCalculations(options: TaxCalculationsOptions): [number, number] {

    const {tax, products} = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax]
}

const tax = 0.15;
const shoppingCart = [phone, tablet];

const [total, taxTotal] = taxCalculations({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);
console.log('Tax', taxTotal);

export {};