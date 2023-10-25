//export {}; crea modulo para que no se mezclen los archivos
import { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [{
    description: 'Nokia A1',
    price: 150.0
},
{
    description: 'iPad Air',
    price: 250.0
},
{
    description: 'Dell Latitude',
    price: 350.0
}];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('total', total);
console.log('tax', tax);