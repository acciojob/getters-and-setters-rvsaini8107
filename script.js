//complete this code
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    get getName(){
        return this.name;
    }
    set setAge(ageSet){
        this.age = ageSet;
    }
}


class Student extends Person {
    
    study(){
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach(){
        console.log(`${this.name} is teaching`);
    }
}

let ram =  new Student("Ram",21);
ram.study();

let ShriGanesh = new Teacher("ShriGanesh",25);
ShriGanesh.teach();

const person = new Person("RajaRam",121)
console.log(person.name)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
