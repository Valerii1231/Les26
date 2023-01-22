//  1

let car = {
    type: 'electric',
    wheels: 4,
}
let sportCar = {
    doofs: 4,
}
Object.setPrototypeOf(sportCar, car);
let passengerCar = Object.create(car);
passengerCar.doors = 4;
let toyCar = Object.create(sportCar);
toyCar.type = 'toy';



//  2
let employees = {
    wallet: {},
    pay(munth, sum) {
        this.wallet[munth] = sum;
    },
}
let frontendDeveloper = {
    name: 'Mike',
}
Object.setPrototypeOf(frontendDeveloper, employees);
frontendDeveloper.wallet = {};
let backendDeveloper = {
    name: 'Bob',
}
Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1500);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);



//  3
function User(name, age)  {
    this.name = name;
    this.age = age;
}
let user_1 = new User('Mike', 18);
let user_2 = new user_1.constructor('Bob', 25);
console.log(user_2);



//  4
function UserType(name) {
    for (let i = 0; i < name.length; ++i) {
        this[i] = name[i];       
        if(i + 1 == name.length) {
            Object.defineProperty(this, 'length', {
                enumerable: true,
                Writable: false,
                confiqurable: true,
                value: i + 1,
            });
        }
    }
    this.join =  Array.prototype.join;
};
let admins = new UserType(['Mike', 'Bob', 'Nicola']);
console.log(admins.join('; '));