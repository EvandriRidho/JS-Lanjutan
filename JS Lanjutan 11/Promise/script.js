// Promise => Solusi untuk Callback hell ( Penumpukan Callback)

// Menggunakan Jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });


// Tanpa Jquery & Fetch( Vanila JS)
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response))
//         }
//     } else {
//         console.log(xhr.responseText)
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// xhr.send()


// Menggunakan Fetch
fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
    .then(Response => Response.json())
    .then(Response => console.log(Response))


// Promise => Objeck yang mereprentasikan sukses / gagal event asynchronous yang terjadi di masa datang
// janji ( terpenuhi / ingkar)
// states ( fulfilled / rejected / pending)
// callback ( resolve / reject / finally)
// aksi ( then / catch)

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => { // Membuat Promise
    if(ditepati) {
        resolve('Janji Telah Ditepati');
    } else {
        reject('Janji Tidak Ditepati');
    }
});

janji1
    .then(response => console.log('OK! : ' + response)) //then jika resolve
    .catch(response => console.log('Not OK! : ' + response)); //catch jika reject

console.log(janji1);


// Contoh 2
let janji = true;
const janji2 = new Promise((resolve, reject)=> {
    if(janji) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!')
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Tidak Ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('Mulai');
// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log('Selesai Menunggu!'))
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('Not OK! : ' + response) );
console.log('Selesai');


// Promise.all() => Untuk menjalankan banyak promise sekaligus
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avangers',
            sutradara: 'Sandhika',
            pemeran: 'Doddy, Erik'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bekasi',
            temp: 35,
            kondisi: 'Panas Sekali'
        }]);
    }, 500)
});

Promise.all([film, cuaca])
//  .then(response => console.log(response));
 .then(response => {
    const [film, cuaca] = response; // Menggunakan Spread Operator
    console.log(film);
    console.log(cuaca);
 });