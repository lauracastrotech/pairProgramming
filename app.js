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
    for(let student in allStudentsObj){
        let numOfCourses = 0;
        let gradeTotal = 0;
        for(let course in allStudentsObj.courses){
            numOfCourses++;
            gradeTotal += allStudentsObj[course];
            console.log(gradeTotal);

        }
    }
}

averageGrade(studentGrades);