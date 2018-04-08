/**
 * Created by guoxiaoxing on 2018/4/8.
 */

var colors = ["1", "2", "3", "4", "5", "6"];

document.writeln(colors[2] + "<br/>");
colors.length = 5;
document.writeln(colors[2] + "<br/>");

document.writeln(colors.toString() + "<br/>");

colors.pop();

document.writeln(colors.toString() + "<br/>");
document.writeln(colors.toString() + "<br/>");