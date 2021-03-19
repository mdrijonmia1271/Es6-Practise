class Parent{
    constructor(){
        this.fatherNeme = "Md. Momotaj Uddin";
    }
}
class Chaild extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherNeme;
    }
}
const baby = new Chaild("Arnol");
const baby2 = new Chaild("Ton");
console.log(baby.getFullName());
console.log(baby2);