function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        schoolYear: yearLevel,
        yearLevel: schoolYear
    };
}

const myProfile = createStudentProfile("Johnson Isimu", 6582, "BSIT", "2nd Year", "2026-2027");
console.log(myProfile);