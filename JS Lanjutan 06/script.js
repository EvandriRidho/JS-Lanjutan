// Destructuring Assignment
// Untuk membongkar nilai array / object kedlm variabel terpisah

// Array
const coba = [1,2,3,4];

const [a,b,c,] = coba; // Bisa menskip dengan mengosongkan
console.log(a);
console.log(b);
console.log(c);

// Assigment dengan Object
const mhs = {
    nama : 'Evandri Ridho Hasmono',
    umur : 19,
    email : 'evandriridho@gundar.ac.id'
};

const {nama, umur, email} = mhs;

console.log(nama);
console.log(umur);
console.log(email);

// Assigment tanpa Object
({ name, age} = {
    name : "Shafa Davina Arrahman",
    age : 19
});
console.log(name);

// Assigment ke variabel baru & Default 
const mhs1 = {
    nama : 'Evandri Ridho Hasmono',
    umur : 19,
};

const {nama: x, umur: y, emai: z = 'ShafaDavina@gmail.com'} = mhs;
console.log(z);

// Mengambil field pd object
const mhs2 = {
    id: 123,
    nama: 'Shafa Davina Arrahman',
    umur: 19,
    email: 'ShafaDavina@gmail.com'
}

function getIdMhs2({id}) {
    return id;
}
console.log(getIdMhs2(mhs2));

// Destructuring Function return value
function kalkulasi(a,b) {
    return {
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi : a / b
    }
}
 // Kalau array wajib ngurut
const {tambah, kurang,kali,bagi} = kalkulasi(2,3);
console.log(tambah);

// Destructuring function arguments
const mhs3 = {
    nama: 'Nasywa Awaliyah Ramadhan',
    umur: 20,
    nilai: {
        tugas: 100,
        uts: 100,
        uas: 100
    }
}

function cetakMhs3({nama, umur, nilai: {tugas,uts,uas}}) {
    return `halo, saya ${nama}, saya ${umur} tahun, nilai uas saya ${uas}.`;
}

console.log(cetakMhs3(mhs3));