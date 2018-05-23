/**
 * Created by suce on 2018/5/14.
 */


const PI = 3.14;

document.writeln("<br/>");
document.writeln(PI);

let a = 5;

'abc'.charAt(0);

function point(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

document.writeln("<br/>");
document.writeln(point.length);

var target = {};

Object.assign(target, {c : 3});

document.writeln("<br/>");
document.writeln(target.c);
document.writeln("<br/>");

let set = new Set();

[1, 2, 3, 4, 5, 6].forEach(x => set.add(x));

for(let i of set){
    document.writeln(i);
}


const weekSet = new WeakSet();
weekSet.add(1);
weekSet.add(1);
weekSet.add(1);
weekSet.add(1);
document.writeln(...weekSet);