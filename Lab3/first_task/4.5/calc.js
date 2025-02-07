let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator(){
    this.a = 0;
    this.b = 0;
    
    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b1;
    }

    this.read = function() {
        this.a = +window.prompt("a?");
        this.b = +window.prompt("b?");
    }

};
