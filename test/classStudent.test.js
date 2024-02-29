const { isClass } = require("./utilities");
const Student = require("../src/classStudent");
// const { describe } = require("yargs");

let student = null;

describe("Student", () => {
  beforeEach(() => {
    student = new Student();
  });

  describe("The Student class", () => {
        test("should be a class", () => {
          expect(isClass(Student)).toBe(true);
        });
      });

  describe("The Student class", () => {
    test("should be a class", () => {
      expect(isClass(Student)).toBe(true);
    });
  });

  describe("The student constructor property", ()=> {
    test('should include name, age and year', ()=>{
        expect(student).toHaveProperty('name');
        expect(student).toHaveProperty('age');
        expect(student).toHaveProperty('year');
    });
   
    test('the default properties have the correct types', ()=>{
        expect(typeof student.name).toBe('string');
        expect(student.age).toBe(null);
        expect(typeof student.year).toBe('string');
    });
  });

});