
class Person { 
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }

    setName(name) {
        this.name = name;
    }
}

let obj = new Person('RH', 30); 
obj.setName('Rijwan'); 

obj; 
