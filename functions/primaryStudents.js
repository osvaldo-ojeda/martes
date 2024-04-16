const primaryStudents = (array) => {
  // const students=array.filter(student=>student.curso==="Primero")
  // const studentsName=students.map(student=>student.nombre)
  // const nameSort=studentsName.sort()
  // console.log(`🚀 ~ primaryStudents ~ nameSort:`, nameSort)
  // --------------
  const students = array
    .filter((student) => student.curso === "Primero")
    .map((student) => student.nombre)
    .sort((a, b) => a.localeCompare(b));
  console.log(`🚀 ~ primaryStudents ~ students:`, students);
};

module.exports = primaryStudents;
