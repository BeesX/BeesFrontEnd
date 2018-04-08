/**
 * Created by guoxiaoxing on 2017/5/15.
*/

var encode = "http://www.github.com";
var decode = "http%3A%2F%2Fwww.github.com";

var person = {};

var student = {
    name: 'LiMing',
    age: 13
};

document.writeln("student: " + student.age + " " +  student.name + "<br/>");
document.writeln("student: " + student["age"] + " " + student["name"] + "<br/>");

document.writeln("Global对象" + "<br/>");
document.writeln("encodeURI(encode)：" + encodeURI(encode) + "<br/>");
document.writeln("encodeURIComponent(encode)：" + encodeURIComponent(encode) + "<br/>");
document.writeln("decodeURI(decode)：" + decodeURI(decode) + "<br/>");
document.writeln("decodeURIComponent(decode)：" + decodeURIComponent(decode) + "<br/>");
document.writeln("toExponential：" + toExponential(2) + "<br/>" + "<br/>");

