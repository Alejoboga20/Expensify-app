//Object destructuring

const person = {
    name: 'Alejo',
    age: 25
    location: {
        city: 'Tucuman',
        temp: 40
    }
};

const { name, age } = person;

console.log(name, age);

const { city, temp: temperature } = person.location;

if(city && temp){
    console.log(city, temperature);
}
//Array destructuring

const address = ['123 Street', 'New York', 'Pennsylvania', '123'];

const [street, city, state, zip] = address;

console.log(state, city, zip, street);
