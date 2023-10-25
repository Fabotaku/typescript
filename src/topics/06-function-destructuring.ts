export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

const laptop: Product = {
    description: 'Dell Latitude',
    price: 350.0
}

const shoppingCart = [phone, tablet, laptop];
const tax = 0.15;


interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}


export function taxCalculation(options: TaxCalculationOptions): [number, number]{

    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

// const [total, totalTax] = taxCalculation({
//     tax: tax,
//     products: shoppingCart
//     });

// console.log('total', total);
// console.log('tax', totalTax);
