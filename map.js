const studentMarks =[83, 43, 58, 90, 100];

const marksRevision = studentMarks.map(studentMark => studentMark + 5);
console.log(marksRevision);

// filter

const belowaverageMarks = studentMarks.filter(studentMark => studentMark < 60);
console.log(belowaverageMarks);

//reduce

const totalMarks = studentMarks.reduce((total, studentMark) => total + studentMark, 0);
console.log(totalMarks);   

//find

const findnumber = marksRevision.find(mark => mark === 105);
console.log(findnumber);
