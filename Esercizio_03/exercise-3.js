const students = ["Paul", "George", "Lucas"];

function addStudent(student) {
  students.push(student);

  // students.splice(3,0, student), alternativa
}

addStudent("Marco");


console.log(students);

// Possiamo aggiungere un elemento agli array anche se dichiarato come const
// perche gli array prevedono infiniti elementi, se non definiti con valore undefined
