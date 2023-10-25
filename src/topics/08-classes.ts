export class Persona{
//variables dentro de la clase se conocen como properties
  
 
//funciones dentro de la clase se conocen como methods
    constructor(
        public name: string, 
        public lastname: string,
        private address: string, 
        ){
        // this.name = name;
        // this.address = address;
        // this.age = age;
    }
}

const ironman = new Persona('Tony','start', 'Malibu');

console.log(ironman);

// export class Hero extends Persona {
//     constructor(
//         public alterEgo: string,
//         public realName: string,
//         public age: number
//     ){
//         super(realName, "New York");
//     }
// }

export class Hero {

    // public persona: Persona;
    constructor(
        public alterEgo: string,
        public realName: string,
        public age: number,
        public persona: Persona
    ){
    //    this.persona = new Persona(realName, "New York");
    }
}

const tony = new Persona ('Tony','stark', 'New York')
const superman = new Hero('ironManNegro', 'Tony', 30, tony);
console.log(superman);