/**
 * Created by guoxiaoxing on 2018/4/10.
 */

// eval("alert('hi')");

document.writeln(window + "<br/>");
document.writeln(document + "<br/>");

var person = {
    _year: int,
    name: String

};
Object.defineProperties(person, 'li');
document.writeln(person.toString());


Object.defineProperty(person, "year", {
    get: function () {
        return this._year;
    },
    set: function () {
        this._year = 20;
    }
});

document.writeln(Object.getOwnPropertyDescriptor(person, "_year"));