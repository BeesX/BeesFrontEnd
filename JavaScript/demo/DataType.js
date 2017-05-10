/**
 * Created by guoxiaoxing on 16/9/25.
 */

var a = "3.14";
var b = a - 2;
var c = a + 2;
var colors = ["red", "green", "blue"];
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = numbers.every(function (item) {
    return item > 2;
});

var filterResult = numbers.filter(function (item) {
    return item > 2;
});

var forEachResult = numbers.forEach(function (item) {
    return item > 2;
});

var mapResult = numbers.map(function (item) {
    return item > 2;
});

var someResult = numbers.some(function (item) {
    return item > 2;
});

var reduceSum = numbers.reduce(function (prev, cur) {
    return prev + cur;
});

var reduceRightSum = numbers.reduceRight(function (prev, cur) {
    return prev + cur;
});

var writeDataType = function () {
    document.writeln("基本类型" + "<br/>");
    document.writeln(typeof 1 + '<br/>');
    document.writeln(typeof true + "<br/>");
    document.writeln(typeof writeDataType + "<br/>");
    document.writeln(typeof null + "<br/>");
    document.writeln(typeof 13 + "<br/>");
    document.writeln(typeof 1 + "<br/>");
    document.writeln(0.05 + 0.25);
    document.writeln(typeof message + "<br/>");
    document.writeln(colors.toString() + "<br/>" + "<br/>");


    document.writeln("Array类型" + "<br/>");
    document.writeln("push：" + colors.push("black", "yellow") + "--" + colors.toString() + "<br/>");
    document.writeln("pop：" + colors.pop() + "--" + colors.toString() + "<br/>");
    document.writeln("shift：" + colors.shift() + "--" + colors.toString() + "<br/>");
    document.writeln("unshift：" + colors.unshift("black", "yellow") + "--" + colors.toString() + "<br/>");
    document.writeln("reverse：" + numbers.reverse() + "--" + numbers.toString() + "<br/>");
    document.writeln("sort：" + numbers.sort(compare) + "--" + numbers.toString() + "<br/>");
    document.writeln("concat：" + numbers.concat(colors, 11) + "--" + numbers.toString() + "<br/>");
    document.writeln("slice：" + numbers.slice(2, 5) + "--" + numbers.toString() + "<br/>");
    document.writeln("splice：" + numbers.splice(0, 1) + "--" + numbers.toString() + "<br/>");
    document.writeln("splice：" + numbers.splice(2, 0, 12) + "--" + numbers.toString() + "<br/>");
    document.writeln("splice：" + numbers.splice(2, 1, 14) + "--" + numbers.toString() + "<br/>");
    document.writeln("indexOf：" + numbers.indexOf(14) + "--" + numbers.toString() + "<br/>");
    document.writeln("lastIndexOf：" + numbers.indexOf(2) + "--" + numbers.toString() + "<br/>");
    document.writeln("every：" + everyResult + "--" + numbers.toString() + "<br/>");
    document.writeln("filter：" + filterResult + "--" + numbers.toString() + "<br/>");
    document.writeln("forEach：" + forEachResult + "--" + numbers.toString() + "<br/>");
    document.writeln("map：" + mapResult + "--" + numbers.toString() + "<br/>");
    document.writeln("some：" + someResult + "--" + numbers.toString() + "<br/>");
    document.writeln("reduceSum：" + reduceSum + "--" + numbers.toString() + "<br/>");
    document.writeln("reduceRightSum：" + reduceRightSum + "--" + numbers.toString() + "<br/>");


};

function compare(value1, value2) {
    return value1 - value2;
}

writeDataType();

