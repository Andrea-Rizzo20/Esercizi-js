const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

 const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

// const person2 = Object.assign({}, person1);  *

 person2.firstName = 'Simon'




// Nell'esempio noi stiamo assegnando a person2 il riferimento all'istanza di person1
// mentre utilizzando questo modo*


// noi cloniamo istanza di person1 (non sara una deepclone)

console.log(person1);
console.log(person2);