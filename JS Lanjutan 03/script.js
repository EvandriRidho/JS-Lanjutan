// Arrow Function => Bentuk ringkas ekspresion function
// Arrow Function tidak memiliki konsep this
// Function Expression Memiliki konsep this

// Menggunakan Parameter
// const tampilNama = (nama) => { // boleh tidak menggunakan () jika hanya 1 variabel
//     return `halo, ${nama};`
// }
// console.log(tampilNama("Evandri"));

// Tidak Menggunakan Parameter
const func4 = () => "Hello, World!"; // wajib menggunakan () jika tidak ada & Lebih dari 1 Parameter 
console.log(func4());

// implisit return
const tampilNama = nama => `halo, ${nama}`;
console.log(tampilNama("Evandri"));

let mahasiswa = ["Evandri ", "Davina", "Nasywa"];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length})); //map membantu mengubah setiap elemen dalam array ke bentuk atau nilai yang baru, dan hasilnya adalah array baru.
console.table(jumlahHuruf);


// Konsep This Pada Arrow Function
const Mahasiswa = function() { 
    this.nama = 'Evandri';
    this.umur = 19;
    this.sayHello = () => { // Method bisa diubah menjadi arrow Function
        console.log(`Halo saya ${this.nama}, saya ${this.umur} tahun.`);
    }

    setInterval(() => { 
        console.log(this.umur++);
    }, 500);
}

const evandri = new Mahasiswa(); // new karena construction



//  Implementasi Arrow Function
const box = document.querySelector('.box'); // Mencari elemen dengan kelas box
box.addEventListener("click", function() { // Memberikan event dengan click
    let satu = 'size'; // Mendeklarasikan Variabel
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu]; // Menukar Nilai
    }

    this.classList.toggle(satu); // Menambah jika tidak ada & Menghapus jika ada
    setTimeout(()=> { // Mengatur Waktu 
        this.classList.toggle(dua);
    }, 600); // 600 milidetik
});
