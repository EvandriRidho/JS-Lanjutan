// Asynchronous Javascript
// JS is a Single-threaded, non-blocking, asynchronous , and Concurrent Languange
// Thread adalah urutan eksekusi kode
// non-blocking => Bisa melanjutkan program walau program sebelumnya belum selesai
// Asynchronous + single-thread = Concurrency
// Asynchoronou + multi-thread = Parallelism


// Contoh Code
console.log('Satu')
setTimeout(() => {
    console.log('Dua')
}, 5000)
console.log('Tiga')

// DON'T BLOCK THE EVENT LOOP!