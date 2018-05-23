/**
 * Created by guoxiaoxing on 2018/4/10.
 */

var s = 'bacdfg';

var pattern1 = /a/g;

document.writeln(pattern1.global + "<br/>");
document.writeln(pattern1.ignoreCase + "<br/>");
document.writeln(pattern1.multiline + "<br/>");
document.writeln(pattern1.source + "<br/>");

document.writeln(pattern1.exec(s) + "<br/>");