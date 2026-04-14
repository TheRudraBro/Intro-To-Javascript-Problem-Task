var mathmatics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = mathmatics + biology + chemistry + physics + bangla;
var averageMarks = totalMarks / 5;
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks.toFixed(2));

// The total marks are calculated by summing up the marks of all subjects, 
// and the average is calculated by dividing the total marks by the number of subjects (5). 
// The average is then rounded to 2 decimal places using the toFixed() method.