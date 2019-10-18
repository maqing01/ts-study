// 类型保护

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

let pet: Fish | Bird = {
    fly() { console.log('flying') },
    layEggs() {}
}

if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
