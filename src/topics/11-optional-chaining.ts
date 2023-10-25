export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Fabo",
}
const passenger2: Passenger = {
    name: "Fabi",
    children: ['Fabito', 'Fabita'],
}

const printChildren =  ( passenger: Passenger) => {
    const { name } = passenger;
    const howManyChildren = passenger.children?.length || 0; //optional chaining operator ?.
    console.log(name, "tiene", howManyChildren, "hijos");
}

printChildren(passenger1);
printChildren(passenger2);