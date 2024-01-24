// High Order Function
function kerjakanTugas(matkul, selesai) { // KerjakanTugas adalah high order function
    console.log(`Mulai Mengerjakan Tugas ${matkul}`);
    selesai(); // selesai adalah Callback
}
// Function yang disimpan didalam argument adalah callback
function selesai() {
    alert('Selesai mengerjakan Tugas!');
}

kerjakanTugas("Web Dev", selesai);

// Filter, Map, dan Reduce
const angka = [-1,8,9,1,-5,-4,3,2,9];

// Filter
// Mencari angka >= 3
const newAngka = angka.filter(x =>  x >= 3); // Arrow Function
console.log(newAngka);

// Map
// Kalikan semua angka dengan 2
const baruAngka = angka.map(x => x * 2);
console.log(baruAngka);

// Reduce
// Jumlahkan semua elemen Array
const atarashiiAngka = angka.reduce((accumulator, curretValue) => accumulator + curretValue);
console.log(atarashiiAngka);

// Method Chaining => Menggabungkan high order function
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5) //8,9,9
    .map(a => a * 3) // 24,27,27
    .reduce((acc, cur) => acc + cur, 0); //78

console.log(hasil);

// LATIHAN
// Ambil semua elemen vidio
const vidios = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN
let jsLanjut = vidios.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing2 vidio
    .map(item => item.dataset.duration)

// Ubah menjadi float, mnt -> dtk
    .map(waktu => {
        // 10:30 => [10, 30] split
        const parts = waktu.split(':') .map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// Jumlahkan semua dtk
    .reduce((total, detik) => total + detik, 0);

// Ubah menjadi jam mnt dtk
const jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam * 3600;
const mnt = Math.floor(jsLanjut / 60);
const dtk = jsLanjut - mnt * 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${mnt} menit, ${dtk} detik.`;
const jmlVidio = vidios.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVidio = document.querySelector('.jumlah-video');
pJmlVidio.textContent = `${jmlVidio} Video.`;