// Practice coding Objects, Strings, and Arrays
// Date: 2/17/2024
// Programmers: Orlane, Clio, and Laura

const studentGrades = {
    studentA: {
        'name' : "Orlane",
        'grade' : 95,
        'courses' : {
            'JavaScript': 98,
            'CSS': 95,
            'HTML' : 96},
        'passing' : true
        },
    studentB: {
        'name' : "Clio",
        'grade' : 90,
        'courses' : {
            'Python': 81,
            'PHP': 80,
            'Django' : 79},
        'passing' : false
    },
    studentC: {
        'name' : "Orlane",
        'grade' : 65,
        'courses' : {
            'SQL': 87, 
            'MongoDB': 78,
            'PHP': 80},
        'passing' : false
    }
};

const averageGrade = (allStudentsObj) => {
    console.log(78);
    for(let student in allStudentsObj){
        let numOfCourses = 0;
        let gradeTotal = 0;
        // console.log(typeof allStudentsObj[student]);
        for(let studentInfo in allStudentsObj[student]){
            // console.log(student[studentInfo]);
            for(let course in allStudentsObj[student][studentInfo]){
                // numOfCourses++;
                gradeTotal += studentInfo[course];
                // console.log(studentInfo[course]);
                // console.log(gradeTotal);
                console.log(allStudentsObj[student][studentInfo][course]);
                // console.log(typeof course);
            }
        }
    }
}

averageGrade(studentGrades);