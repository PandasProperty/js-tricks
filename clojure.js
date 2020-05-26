var myObject = {
    name: 'Marius',
    func: function() {
        var self = this;
        console.log('1', this.name);        // Marius
        console.log('2', self.name);        // Marius
        (function() {
            console.log('1', this.name);    // undefined
            console.log('2', self.name);    // Marius
        }());
    }
};

myObject.func();


(function document() {
    var length = 10;       
    function fn() {
        console.log(this.length);     
    }

    var obj = {
        length: 5,
        method: function(fn) {
            fn();               // in browser : 10    
            arguments[0]();     // 2
        }
    };
    obj.method(fn, 1);
}());
