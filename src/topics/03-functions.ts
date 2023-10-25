function addNumbers(a: number, b: number): number {
    return a + b;
}

const addStrings = (a:string, b:string):string  => {
    return a + b; 
}

function multiply(a: number, b?: number, c:number = 2): number {
    return a * b *c;
}

const result:number = addNumbers(1, 2);
console.log(result);

const result2: string = addStrings('Hello', 'World');
console.log(result2);

const result3: number = multiply(5, 5);
console.log(result3);

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    
    character.hp += amount;
   
}

const jarvan: Character = {
    name: 'Jarvan',
    hp: 100,
    showHp() {
        console.log('Jarvan has Health Points', this.hp);
    }
}

healCharacter(jarvan, 20);


jarvan.showHp();
export {};