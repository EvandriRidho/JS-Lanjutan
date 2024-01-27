// for..of -> Perulangan object iterable
// iterable : str, array, arguments, Map, etc

// Array
const mhs = ['Evandri', 'Davina', 'Nasywa'];

// for ( let i = 0; i <= mhs.length; i++) { Menggunakan for biasa
//     console.log(mhs[i]);
// }  

//mhs.forEach(m => console.log(m)); // Menggunakan forEach

for( const m of mhs) { // Menggunakan for...of
    console.log(m); // jika ingin memiliki indeks tambahkan .entries sehabis mhs
}

// String
const nama = 'Evandri';
for(const n of nama) {
    console.log(n);
}

// NodeList
const linama = document.querySelectorAll('.nama')
for (x of linama) {
    console.log(x.innerHTML)
}

// Arguments
function penjumlahan() {
    let jumlah = 0;
    for(a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(penjumlahan(1,2,3,4,5));


// For..in -> Perulangan object enumerable
// enumerable : property pd object

const siswa = {
    nama: 'Shafa Davina Arrahman',
    umur: 19,
    jurusan: 'Manajemen'
}

for(c in siswa) {
    console.log(siswa[c]);
}