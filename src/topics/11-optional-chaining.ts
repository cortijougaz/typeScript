export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Ricardo',
}

const passenger2: Passenger = {
    name: 'Melisa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = ({name, children}: Passenger): number => {
const howManyChildren = children?.length || 0;
    console.log(name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);