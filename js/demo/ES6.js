/**
 * Created by suce on 2018/5/14.
 */


const PI = 3.14;

document.writeln("<br/>");
document.writeln(PI);

let a = 5;

'abc'.charAt(0);

function point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

document.writeln("<br/>");
document.writeln(point.length);

var target = {};

Object.assign(target, {c: 3});

document.writeln("<br/>");
document.writeln(target.c);
document.writeln("<br/>");

let set = new Set();

[1, 2, 3, 4, 5, 6, 7, 6, NaN, NaN, {}, {}].forEach(x => set.add(x));

for (let i of set) {
    document.writeln(i);
}

document.writeln("<br/>");

let proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
});

let obj = Object.create(proxy);
document.writeln(obj.time + "<br/>");

let person = {
    name: '张三'
};

let proxy1 = new Proxy(person, {
    get: function (target, p, receiver) {
        if (p in target) {
            return target[p];
        } else {
            document.writeln("property is not in target");
        }
    }
});

document.writeln(proxy1.name + "<br/>");
document.writeln(proxy1.age + "<br/>");


let proxy2 = new Proxy(person, {
    set: function (target, p, value, receiver) {
        if (value === 'lisi') {
            target[p] = '李四';
        }
    }
});

proxy2.name = 'lisi';
document.writeln(proxy2.name + "<br/>");

let target1 = function () {
    return 'I am target';
};

let proxy3 = new Proxy(target1, {
    apply: function () {
        return 'I am proxy';
    }
});

document.writeln(proxy3() + '<br/>');


let promise = new Promise(function (resolve, reject) {
    resolve();
    reject();
});

promise.then(function () {
    document.writeln('resolve' + '<br/>');
}).then(function () {
    document.writeln('reject' + '<br/>');
});

function loadImageAsync(url) {

    return new Promise(function (resolve, reject) {

        let image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(image);
        };

        image.src = url;
    });

}