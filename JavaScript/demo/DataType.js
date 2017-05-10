/**
 * Created by guoxiaoxing on 16/9/25.
 */

var a = "3.14";
var b = a - 2;
var c = a + 2;
var colors = ["red", "green", "blue"];
var numbers = [1, 2, 3, 4, 5, 10];

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
    document.writeln("push：" + colors.push("black","yellow") + "--" + colors.toString()+ "<br/>");
    document.writeln("pop：" + colors.pop() + "--" + colors.toString()+ "<br/>");
    document.writeln("shift：" + colors.shift() + "--" + colors.toString()+ "<br/>");
    document.writeln("unshift：" + colors.unshift("black","yellow") + "--" + colors.toString()+ "<br/>");
    document.writeln("reverse：" + numbers.reverse() + "--" + numbers.toString()+ "<br/>");
    document.writeln("sort：" + numbers.sort(compare) + "--" + numbers.toString()+ "<br/>");
};

function compare(value1, value2) {
    return value1 - value2;
}

writeDataType();

