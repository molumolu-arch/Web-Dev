let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = +window.propmt("a?");
        this.b = +window.propmt("b?");
    },

    sum() {
        return this.a+this.b;
    },

    mul() {
        return this.a*this.b;
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() )