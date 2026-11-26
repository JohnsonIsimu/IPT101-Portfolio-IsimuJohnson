const bsit_student = {
    student1: {
        student_info: {
            StudentName: "Johnson Isimu",
            idNumber: 6582,
            yearLevel: 2,
            program: "Information Technology"
        }, 
        course: {
            subj1: "ADET",
            subj2: "Event Driven Programming",
            subj3: "IPT",
            subj4: "Networking 1",
            subj5: "Pathfit 4"
        },
        score: {
            subj1: 99,
            subj2: 89,
            subj3: 90,
            subj4: 97,
            subj5: 94
        }
    },
    student2: {
        student_info: {
            StudentName: "Maria Clara Reyes",
            idNumber: 6583,
            yearLevel: 2,
            program: "Information Technology"
        },
        course: {
            subj1: "ADET",
            subj2: "Event Driven Programming",
            subj3: "IPT",
            subj4: "Networking 1",
            subj5: "Pathfit 4"
        },
        score: {
            subj1: 95,
            subj2: 96,
            subj3: 98,
            subj4: 94,
            subj5: 97
        }
    },
    student3: {
        student_info: {
            StudentName: "Juan Dela Cruz",
            idNumber: 6584,
            yearLevel: 2,
            program: "Information Technology"
        },
        course: {
            subj1: "ADET",
            subj2: "Event Driven Programming",
            subj3: "IPT",
            subj4: "Networking 1",
            subj5: "Pathfit 4"
        },
        score: {
            subj1: 85,
            subj2: 88,
            subj3: 82,
            subj4: 86,
            subj5: 90
        }
    },
    student4: {
        student_info: {
            StudentName: "Angela Santos",
            idNumber: 6585,
            yearLevel: 2,
            program: "Information Technology"
        },
        course: {
            subj1: "ADET",
            subj2: "Event Driven Programming",
            subj3: "IPT",
            subj4: "Networking 1",
            subj5: "Pathfit 4"
        },
        score: {
            subj1: 78,
            subj2: 81,
            subj3: 75,
            subj4: 80,
            subj5: 84
        }
    }
};

for (let key in bsit_student) {
    let student = bsit_student[key];

    console.log("\n========================================");
    console.log("=== Student Information ===");
    console.log("Name: " + student.student_info.StudentName);
    console.log("ID Number: " + student.student_info.idNumber);
    console.log("Year Level: " + student.student_info.yearLevel);
    console.log("Program: " + student.student_info.program);

    console.log("\n=== Courses Enrolled & its Score ===");
    console.log(student.course.subj1 + ": " + student.score.subj1);
    console.log(student.course.subj2 + ": " + student.score.subj2);
    console.log(student.course.subj3 + ": " + student.score.subj3);
    console.log(student.course.subj4 + ": " + student.score.subj4);
    console.log(student.course.subj5 + ": " + student.score.subj5);


    let gwa = (
        student.score.subj1 +
        student.score.subj2 +
        student.score.subj3 +
        student.score.subj4 +
        student.score.subj5
    ) / 5;

    console.log("\n=== Final Evaluation ===");
    console.log("General Weighted Average: " + gwa);

    if (gwa >= 98 && gwa <= 100) {
        console.log("Grade: A+");
    } else if (gwa >= 94 && gwa < 98) {
        console.log("Grade: A-");
    } else if (gwa >= 90 && gwa < 94) {
        console.log("Grade: B+");
    } else if (gwa >= 87 && gwa < 90) {
        console.log("Grade: B");
    } else if (gwa >= 83 && gwa < 87) {
        console.log("Grade: B-");
    } else if (gwa >= 80 && gwa < 83) {
        console.log("Grade: C+");
    } else if (gwa >= 77 && gwa < 80) {
        console.log("Grade: C");
    } else if (gwa >= 73 && gwa < 77) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}
