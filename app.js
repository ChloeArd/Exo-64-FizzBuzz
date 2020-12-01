let nombre3 = 3;
let nombre5 = 5;

for (let nombre = 1; nombre <= 100; nombre++) {

    if ((nombre % nombre3) === 0 && (nombre % nombre5) === 0) {
        console.log(nombre + " => \"fizzbuzz\"");
    }

    else if ((nombre % nombre3) === 0) {
        console.log(nombre + " => \"fizz\"");
    }

    else if ((nombre % nombre5) === 0) {
        console.log(nombre + " => \"buzz\"");
    }

    else {
        console.log(nombre + " => " + nombre);
    }
    
}