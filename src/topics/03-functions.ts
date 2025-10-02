function addNumber(a: number, b: number) {
    return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(first: number, second?: number, base: number = 2) {
    return first * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const result:number = addNumber(1,2)
const result2:string = addNumberArrow(2,3)
const multiplyResult:number = multiply(5);
console.log({result,result2, multiplyResult})

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider,10);

strider.showHp();
export {};