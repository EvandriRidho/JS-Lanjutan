// Excecution Global, Hoisting , and Scope
// Global Context akan terjadi hoisting & Window
// Lokal Context akan terjadi hoisting, Window, Arguments
// Terjadi 2 fase di js yaitu creation & Execution
function satu() {
    var nama = "Evandri";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama); // Berisi undifined karena var nama mengalami hoisting
var nama = "Davina";
satu();
dua("Nasywa"); // Dikarenakan function dua() tidak menerima argument makan nasywa masuk ke dalam arguments
console.log(nama);

// Closure
// Closeru adalah sebuah function yang memiliki akses ke parent scopenya.
// Lexical Scope
function init() {
    let name = "Evandri"; // Local Variabel
    function tampilNama() { // Inner Function ( Closure )
        console.log(name); // akses ke parent variabel
    }
    tampilNama();
}
init();

//Function Factory
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`);
    }
}

let SelamatPagi = ucapkanSalam("pagi")
console.log(SelamatPagi("Evandri"));

//Private Method
let counter = 0;
let add = function() {
    return ++counter;
}

console.log(add());