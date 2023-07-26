

// convert Celsius to Fahrenheit
/*
Bei der Umrechnung von Grad Celsius nach Fahrenheit wird mit 1,8 multipliziert,
und dann 32 addiert.
Andersherum wird bei der Umrechnung von Fahrenheit nach Celsius 32 abgezogen,
und dann durch 1,8 dividiert.
*/ 

const fahrenheit = 32;
const celsius1 = toCelsius;
const celsius = toCelsius(32);
//const fahrenheit = toCelsius(celsius);

function toCelsius(fahrenheit){
    var celsius;
    celsius = (fahrenheit - 32) / 1.8;
    //console.log(celsius);
    return celsius;
   
    
}

function toFahrenheit(celsius){
    var fahrenheit;
    fahrenheit = celsius * 1.8 - 32;
    //console.log(fahrenheit);
    return fahrenheit;
    
    
}
module.exports={
    toCelsius,
    toFahrenheit
};
/** */
toCelsius(32);  
toFahrenheit(32);    

//console.log(celsius1 + "°C");

console.log(celsius + "°C");


