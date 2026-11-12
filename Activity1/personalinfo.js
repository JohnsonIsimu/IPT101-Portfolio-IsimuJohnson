const student_info = {
    StudentName: "Johnson Isimu",
    idNumber: 6582,
    yearLevel: 2,
    program: "Information Technology"
};

const course = {
    subj1: "ADET",
    subj2: "Event Driven Programming",
    subj3: "IPT",
    subj4: "Networking 1",
    subj5: "Pathfit 4"
};

const score = {
    subj1: 99,
    subj2: 89,
    subj3: 90,
    subj4: 97,
    subj5: 94
};

console.log("\n=== Student Information ===");

console.log("Name: " + student_info.StudentName);
console.log("ID Number: " + student_info.idNumber);
console.log("Year Level: " + student_info.yearLevel);
console.log("Program: " + student_info.program);


console.log(" \n=== Courses Enrolled & its Score === ");

console.log(course.subj1 + ": " + score.subj1);
console.log(course.subj2 + ": " + score.subj2);
console.log(course.subj3 + ": " + score.subj3);
console.log(course.subj4 + ": " + score.subj4);
console.log(course.subj5 + ": " + score.subj5);

let gwa = (score.subj1 + score.subj2 + score.subj3 + score.subj4 + score.subj5) / 5;
console.log("\n=== Final Evaluation ===");
console.log("General Weighted Average: " + gwa);

if (gwa >= 98) {
    console.log("Grade: A+");
} else if (gwa >= 94) {
    console.log("Grade: A-");
} else if (gwa >= 90) {
    console.log("Grade: B+");
} else if (gwa >= 87) {
    console.log("Grade: B");
} else if (gwa >= 83) {
    console.log("Grade: B-");
} else if (gwa >= 80) {
    console.log("Grade: C+");
} else if (gwa >= 77) {
    console.log("Grade: C");
} else if (gwa >= 73) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
