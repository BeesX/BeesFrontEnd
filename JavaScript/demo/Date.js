/**
 * Created by guoxiaoxing on 2018/4/10.
 */

var date1 = new Date();
document.writeln(date1 + "<br/>");

var date2 = new Date(Date.parse("2018, 4, 3"));
document.writeln(date2 + "<br/>");

var date3 = new Date(Date.UTC(2018, 4, 3));
document.writeln(date3 + "<br/>");

document.writeln(date1.toDateString() + "<br/>" );

document.writeln(date2.toLocaleDateString() + "<br/>");
document.writeln(date3.toString());