let skills: string[] = ['JS', 'TS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']; // Array of strings 

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const jarvan: Character = {
    name: 'Jarvan',
    hp: 3200,
    skills: [],
};

    jarvan.hometown = 'Demacia';
    jarvan.skills = ['q', 'w', 'e', 'r']

    console.table(jarvan);
export {}; // To avoid TS error