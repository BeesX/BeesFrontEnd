/**
 * Created by guoxiaoxing on 16/9/25.
 */

var a = "3.14";
var b = a - 2;
var c = a + 2;

// alert(b + "\n" + c);

var scope = void(b = 2, c = 3, d = 4);

var test = function(){

    document.writeln(scope + "<br/>");

    scope = "局部变量变量";

    document.writeln(scope + "<br/>");
};


if(typeof test())

test();