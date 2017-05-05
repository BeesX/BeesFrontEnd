/**
 * Created by guoxiaoxing on 16/9/25.
 */

var a = "3.14";
var b = a - 2;
var c = a + 2;
var colors = ["red", "green", "blue"];

var writeDataType = function(){
    var scope = "局部变量变量";
    document.writeln(typeof 1 + '<br/>');
    document.writeln(typeof true + "<br/>");
    document.writeln(typeof writeDataType + "<br/>");
    document.writeln(typeof null + "<br/>");
    document.writeln(typeof 13 + "<br/>");
    document.writeln(typeof 1 + "<br/>");
    document.writeln(0.05 + 0.25);
    document.writeln(typeof message + "<br/>");
    document.writeln(colors.toString() + "<br/>");
};

writeDataType();

