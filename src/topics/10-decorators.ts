function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T 
){
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass{
    public myProperty: string = 'ABC123';

    print() {
        console.log('Hello World from SuperClass');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);

//un decorador es una función que permite modificar el comportamiento de clases y metodos.