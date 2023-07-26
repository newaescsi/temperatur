


// importiere Module
//const { expect } = require("chai");
//const { toCelsius } = require('../celsius.js');
//const { toFahrenheit,toCelsius } = require("../celsius.js");

/**/

// Testfälle unter Verendung von chai und mocha 
const { expect } = require("chai");
const { toCelsius } = require('../celsius.js');


describe("teste23001 Funktion", () => {
    it("to celsius umrechnen " , () => {
    expect(toCelsius(68)).to.equal(20);
    });
    
});

describe("teste23002 Funktion", () => {
    it("to celsius umrechnen " , () => {
    expect(toCelsius(-4)).to.equal(-20);
    });
    
});

describe("teste23003 Funktion", () => {
    it("to celsius umrechnen " , () => {
    expect(toCelsius(0)).to.equal(-17.77777777777778);
    });

});