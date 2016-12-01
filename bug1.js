
const people = [{
    name: 'Alice',
    age: 25
}, {
    name: 'Bob',
    age:27
}, {
    name: 'Charlie',
    age: 40
}];

for (let person in people) {
    console.log(people[person].name + " is " + people[person].age);
}