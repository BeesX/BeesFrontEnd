/**
 * Created by guoxiaoxing on 2018/4/8.
 */

var colors = ["1", "2", "3", "4", "5", "6"];

document.writeln(colors[2] + "<br/>");

colors.pop();
document.writeln(colors.toString() + "<br/>");

colors.shift();
document.writeln(colors.toString() + "<br/>");

colors.unshift("7", "8");
document.writeln(colors.toString() + "<br/>");

colors.concat("9", "10", "11", "12", "13", "14", "15");
document.writeln(colors.toString() + "<br/>");

// colors.splice(0, 2);
document.writeln(colors.toString() + "<br/>");

document.writeln(colors.indexOf(3) + "<br/>");
document.writeln(colors.indexOf("3") + "<br/>");
document.writeln(colors.lastIndexOf("5") + "<br/>");

colors.forEach(function (item, index, array) {
    document.writeln(index + " : " + item + "<br/>");
});

var filterColors = colors.filter(function (item, index, array) {
    return item > 5;
});

document.writeln(filterColors + "<br/>");

var reduceColors =  colors.reduce(function (prev, our, index, array) {
    return prev + our;
});

document.writeln(reduceColors + "<br/>");