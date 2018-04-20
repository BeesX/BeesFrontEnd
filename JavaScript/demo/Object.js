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

var person1 = new Person();
document.writeln(person1.name + "<br/>");

var person2 = new Person();
document.writeln(person2.name + "<br/>");

document.writeln("Global对象" + "<br/>");
document.writeln("encodeURI(encode)：" + encodeURI(encode) + "<br/>");
document.writeln("encodeURIComponent(encode)：" + encodeURIComponent(encode) + "<br/>");
document.writeln("decodeURI(decode)：" + decodeURI(decode) + "<br/>");
document.writeln("decodeURIComponent(decode)：" + decodeURIComponent(decode) + "<br/>");
document.writeln("toExponential：" + toExponential(2) + "<br/>" + "<br/>");

