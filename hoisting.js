
(function () {
    var x = y = 5 - '3';
})();

console.log('x', x);        // ReferenceError: x is not defined
console.log('y', y);        // 2 - if 'use strict'; ReferenceError: y is not defined

var z = function () {
    var w = q = 5 - '3';
};
z();
console.log('w', w);        // ReferenceError: x is not defined
console.log('q', q);        // 2 - if 'use strict'; ReferenceError: y is not defined

