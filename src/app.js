// Practice coding Objects, Strings, and Arrays
// Date: 2/17/2024
// Programmers: Orlane, Clio, and Laura

const studentGrades = {
    studentA: {
        'name' : "Orlane",
        'age' : 23,
        // 'grade' : 95,
        'courses' : {
            'JavaScript': 98,
            'CSS': 95,
            'HTML' : 96},
        'passing' : true
        },
    studentB: {
        'name' : "Clio",
        'age' : 28,
        // 'grade' : 90,
        'courses' : {
            'Python': 81,
            'PHP': 62,
            'Django' : 69},
        'passing' : false
    },
    studentC: {
        'name' : "Laura",
        'age' : 34,
        // 'grade' : 65,
        'courses' : {
            'SQL': 87, 
            'MongoDB': 78,
            'PHP': 80},
        'passing' : true
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


const whoPassesTheClass = Object.values(studentGrades).filter((student)=>{
    // let averageGradeObj = {};
    return student['passing'] ? console.log(`${student['name']} passed!`): console.log(`${student['name']} failed.`);
    // if(student[passing]===true){
    //     return student[passing];
    // }
    // for(let student in allStudentsObj){
    //     let numOfCourses = 0;
    //     let gradeTotal = 0;
    //     let averageGrade = 0;
    //     let studentName = allStudentsObj[student].name;
 
    //     for(let studentInfo in allStudentsObj[student]){
    //         if(studentInfo === 'courses'){
    //             for(let grade in allStudentsObj[student][studentInfo]){
    //                 gradeTotal += allStudentsObj[student][studentInfo][grade];
    //                 numOfCourses++;
    //             }
    //         } 
    //     } 
    //     averageGrade = gradeTotal / numOfCourses;
    //     // console.log(averageGradeObj[allStudentObj[student][name]]) 
    //     // console.log(allStudentsObj[student][studentInfo]) 
    //     averageGradeObj[studentName] = Math.round(averageGrade);
    //     // console.log(averageGradeObj);
    // }
    // return averageGradeObj;
})

console.log(whoPassesTheClass);


// INTERMEDIATE OBJECTS, ARRAYS, AND STRINGS
// You are given an array of objects representing students' information. Each object contains the student's name, age, and a list of courses they are enrolled in. Write a function that takes this array as input and returns an array of strings, where each string represents a student's information in the following format: "Name (Age): Courses". If a student is enrolled in multiple courses, list them separated by commas.


const studentArray = [
    {
        'name' : "Orlane",
        'age' : 23,
        // 'grade' : 95,
        'courses' : {
            'JavaScript': 98,
            'CSS': 95,
            'HTML' : 96},
        'passing' : true
        },
    {
        'name' : "Clio",
        'age' : 28,
        // 'grade' : 90,
        'courses' : {
            'Python': 81,
            'PHP': 80,
            'Django' : 79},
        'passing' : false
    },
    {
        'name' : "Laura",
        'age' : 34,
        // 'grade' : 65,
        'courses' : {
            'SQL': 87, 
            'MongoDB': 78,
            'PHP': 80},
        'passing' : false
    }
];

const studentOutput = studentArray.map((student)=>{
    let courseObj = (Object.keys(student.courses)).join(', ');
    return `${student.name} (${student.age}): ${courseObj}`;
})

console.log(studentOutput);