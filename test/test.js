

// convert Celsius to Fahrenheit
/*
Bei der Umrechnung von Grad Celsius nach Fahrenheit wird mit 1,8 multipliziert,
und dann 32 addiert.
Andersherum wird bei der Umrechnung von Fahrenheit nach Celsius 32 abgezogen,
und dann durch 1,8 dividiert.
*/ 

function toCelsius(fahrenheit){
    var celsius;
    celsius = fahrenheit * 1.8 +32;
    return celsius;
}

toCelsius(30);