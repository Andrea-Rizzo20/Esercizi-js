function getKeys(obj) {
  let chiavi = []
  for(let a in obj){
   chiavi.push(a)
  }
  return chiavi

}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);