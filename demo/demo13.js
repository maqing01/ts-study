function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = {
    fly() { console.log('flying'); },
    layEggs() { }
};
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
