// Practice coding Objects, Strings, and Arrays
// Date: 2/17/2024
// Programmers: Orlane, Clio, and Laura

const studentGrades = {
    studentA: {
        'name' : "Orlane",
        // 'grade' : 95,
        'courses' : {
            'JavaScript': 98,
            'CSS': 95,
            'HTML' : 96},
        'passing' : true
        },
    studentB: {
        'name' : "Clio",
        // 'grade' : 90,
        'courses' : {
            'Python': 81,
            'PHP': 80,
            'Django' : 79},
        'passing' : false
    },
    studentC: {
        'name' : "Laura",
        // 'grade' : 65,
        'courses' : {
            'SQL': 87, 
            'MongoDB': 78,
            'PHP': 80},
        'passing' : false
    }
};

const averageGrade = (allStudentsObj) => {
    let averageGradeObj = {};
    for(let student in allStudentsObj){
        let numOfCourses = 0;
        let gradeTotal = 0;
        let averageGrade = 0;
        let studentName = allStudentsObj[student].name;
 
        for(let studentInfo in allStudentsObj[student]){
            if(studentInfo === 'courses'){
                for(let grade in allStudentsObj[student][studentInfo]){
                    gradeTotal += allStudentsObj[student][studentInfo][grade];
                    numOfCourses++;
                }
            } 
        } 
        averageGrade = gradeTotal / numOfCourses;
        // console.log(averageGradeObj[allStudentObj[student][name]]) 
        // console.log(allStudentsObj[student][studentInfo]) 
        averageGradeObj[studentName] = Math.round(averageGrade);
        // console.log(averageGradeObj);
    }
    return averageGradeObj;
}

console.log(averageGrade(studentGrades));