// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai() {  // Named IIFE
    console.log(`DB CONNECTED`)
})();
// here to end the execution of the function must use ';' sign

(function moreChai() { // Named IIFE
    console.log(`DB CONNECTED TWO`)
})();

( (name) => { // Unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`)
})("subha das")
