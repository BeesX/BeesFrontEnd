/**
 * Created by guoxiaoxing on 2017/5/10.
 */

function writeFunction() {

    function sum (num1, num2) {
        return num1 + num2;
    }

    function callSum1(num1, num2) {
        return sum.apply(this, arguments);
    }

    function callSum2(num1, num2) {
        return sum.apply(this, arguments);
    }

    function callSum2(num1, num2) {
        return sum.apply(this, [num1, num2]);
    }


    document.writeln("sum：" + sum(1, 2) + "<br/>");

    var sum1 = sum;
    document.writeln("sum1：" + sum1(1, 2) + "<br/>");

    document.writeln("sum1：" + sum1(1, 2) + "<br/>");

    document.writeln("length：" + sum.length + "<br/>");
    document.writeln("length：" + sum.prototype + "<br/>");
    document.writeln("callSum1(1, 2) ：" + callSum1(1, 2) + "<br/>");
    document.writeln("callSum2(1, 2) ：" + callSum2(1, 2) + "<br/>");
}

writeFunction();