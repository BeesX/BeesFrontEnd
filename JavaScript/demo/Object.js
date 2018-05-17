/**
 * Created by guoxiaoxing on 2017/5/15.
 */

var encode = "http://www.github.com";
var decode = "http%3A%2F%2Fwww.github.com";

var person = {};

var student1 = {
    name: 'LiMing',
    age: 13
};


document.writeln("student: " + student1.age + " " + student1.name + "<br/>");
document.writeln("student: " + student1["age"] + " " + student1["name"] + "<br/>");

function Student(age, name) {
    this.age = age;
    this.name = name;
}

var student2 = new Student(12, "HanMeiMei");
document.writeln(student2.toString() + "<br/>");

function Person() {

}

Person.prototype.name = "LiLi";
Person.prototype.age = 20;

Person.prototype = {
    name: "HanMeiMei",
    age: 18
};

var person1 = new Person();
document.writeln(person1.name + "<br/>");

var person2 = new Person();
document.writeln(person2.name + "<br/>");

document.writeln(("age" in person1) + "<br/>");
document.writeln(Object.keys(person1) + "<br/>");

var obj1 = {
    a: "a"
};
document.writeln(obj1.a + "<br/>");
document.writeln(obj1.a + "<br/>");
var obj2 = Object.create({c: "c"});
delete obj2.c;
document.writeln(obj2.c + "<br/>");

document.writeln("" + Object.getOwnPropertyDescriptor(Object, "prototype").configurable + "<br/>");

var obj3 = {
    get date(){
        return new Date().getDate();
    },

    set date(value){
        console.log(value)
    }
};

obj3.date = "10";
document.writeln(obj3.date + "<br/>");


function foo() {

}


var string ="one line \n two line";
document.writeln('new ${string}' + "<br/>");

var array = ['a', 'b', 'c'];
array.length = 6;

for(i in array){
    document.writeln(i);
}

for(j of array){
    document.writeln(j);
}

var xiaoxing = {
    age: 'xiaoming',
    name: 20,
    say: function(){
        document.writeln("Hello JavaScript");
    }
};