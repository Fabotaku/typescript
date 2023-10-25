export function whatsMyType<T>( argument: T ): T{
    
    return argument;
}

let amIString = whatsMyType<string>('Hello');
let amINumber = whatsMyType<number>(123);
let amIBoolean = whatsMyType<boolean>(true);

console.log(amIString.split(''));
console.log(amINumber.toFixed(2));
console.log(amIBoolean.valueOf());