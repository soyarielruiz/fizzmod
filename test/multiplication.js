//Module Starts
export class Multiplication { 
	constructor() {
		this.base = 2;
	}

	multiplicar( input ) {
        return input * base;
    }

    cambiarBase( newBase ){
        this.base = newBase;
    }

    consultarBase() {
    	return this.base;
    }
}