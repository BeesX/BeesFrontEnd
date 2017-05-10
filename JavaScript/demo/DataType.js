/**
 * Created by guoxiaoxing on 16/9/25.
 */
var writeDataType = function () {

    var a = "3.14";
    var b = a - 2;
    var c = a + 2;

    document.writeln("基本类型" + "<br/>");
    document.writeln(typeof 1 + '<br/>');
    document.writeln(typeof true + "<br/>");
    document.writeln(typeof writeDataType + "<br/>");
    document.writeln(typeof null + "<br/>");
    document.writeln(typeof 13 + "<br/>");
    document.writeln(typeof 1 + "<br/>");
    document.writeln(0.05 + 0.25);
    document.writeln(typeof message + "<br/>");

    document.writeln("Array类型" + "<br/>");

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
    document.writeln("reduceRightSum：" + reduceRightSum + "--" + numbers.toString() + "<br/>" + "<br/>");

    document.writeln("Date类型" + "<br/>");

    var date = new Date();

    document.writeln("valueOf：" + date.valueOf() + "<br/>");
    document.writeln("toString：" + date.toString() + "<br/>");
    document.writeln("toDateString：" + date.toDateString() + "<br/>");
    document.writeln("toISOString：" + date.toISOString() + "<br/>");
    document.writeln("toTimeString：" + date.toTimeString() + "<br/>");
    document.writeln("toUTCString：" + date.toUTCString() + "<br/>");
    document.writeln("now：" + Date.now() + "<br/>");
    document.writeln("parse：" + Date.parse("5/25/2017") + "<br/>");
    document.writeln("parse：" + Date.parse("May 25, 2017") + "<br/>");
    document.writeln("UTC：" + Date.UTC(2017, 5) + "<br/>");
    document.writeln("UTC：" + Date.UTC(2017, 5, 25, 12, 32, 23) + "<br/>" + "<br/>");

    document.writeln("RegExp类型" + "<br/>");

    var pattern1 = /.at/;
    var pattern12 = /.at/g;
    var text = "cat, hat, sat, fat";

    document.writeln("global：" + pattern12.global + "<br/>");
    document.writeln("ignoreCase：" + pattern12.ignoreCase + "<br/>");
    document.writeln("multiline：" + pattern12.multiline + "<br/>");
    document.writeln("lastIndex：" + pattern12.lastIndex + "<br/>");
    document.writeln("source：" + pattern12.source + "<br/>");

    document.writeln("valueOf：" + pattern12.valueOf() + "<br/>");
    document.writeln("toString：" + pattern12.toString() + "<br/>");
    document.writeln("not global：" + pattern1.exec(text) + "<br/>");
    document.writeln("not global：" + pattern1.exec(text) + "<br/>");
    document.writeln("not global：" + pattern1.exec(text) + "<br/>");
    document.writeln("global：" + pattern12.exec(text) + "<br/>");
    document.writeln("global：" + pattern12.exec(text) + "<br/>");
    document.writeln("global：" + pattern12.exec(text) + "<br/>");

    document.writeln("input：" + RegExp.input + "<br/>");
    document.writeln("leftContext：" + RegExp.leftContext + "<br/>");
    document.writeln("rightContext：" + RegExp.rightContext + "<br/>");
    document.writeln("lastMatch：" + RegExp.lastMatch + "<br/>");
    document.writeln("lastParen：" + RegExp.lastParen + "<br/>");
    document.writeln("multiple：" + RegExp.multiple + "<br/>");



};

function compare(value1, value2) {
    return value1 - value2;
}

writeDataType();

