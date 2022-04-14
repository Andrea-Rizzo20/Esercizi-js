class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(obj1){
    obj1 = new Person(obj1.firstName, obj1.lastName)
    return obj1
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);
console.log(`${person.firstName} ${person.lastName}`);