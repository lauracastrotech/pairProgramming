class Student {
    constructor(){
        this.name = "";
        this.age = null;
        this.year = "freshman";
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setAge(age){
        this.age = age;
    }

    getAge(){
        return this.age
    }

    graduate(hasPassed){
        let years = ['sophomore','junior','senior'];

        if(hasPassed){
            switch(this.year){
                case "freshman":
                    this.year===years[0];
                    break;
                case "sophomore":
                    this.year===years[1];
                    break;
                case "junior":
                    this.year===years[2];
                    break;
                case "senior":
                    console.log('Congrats, you graduated!')
                    break;
            }
        } else {
            console.log("You're going to summer school...")
        }
    }
}

module.exports = Student;
//Later : add a Course class