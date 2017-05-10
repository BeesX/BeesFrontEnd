/**
 * Created by guoxiaoxing on 2017/5/10.
 */

function writeFunction() {

    function sum (num1, num2) {
        return num1 + num2;
    }

    document.writeln("sum：" + sum(1, 2) + "<br/>");

    var sum1 = sum;
    document.writeln("sum1：" + sum1(1, 2) + "<br/>");

    sum = null;
    document.writeln("sum1：" + sum1(1, 2) + "<br/>");
}

writeFunction();