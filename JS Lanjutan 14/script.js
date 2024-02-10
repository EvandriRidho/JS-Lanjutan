// Async Await

// Async = Asyncronous Function
// function yang akan mengembalikan promise meskipun tidk ada kode async tapi menggunakan penulisan standar
// 1. function yang berjalan secara async
// 2. Menghasilkan Promise
// 3. Cara penulisan standar ( seperti synchronous )


// Await
// Awat digunakan untuk menghentikan sementara eksekusi sambil menunggu promise selesai


// Implementasi Async Await
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if(waktu < 5000) {
        setTimeout(() => {
            resolve('Selesai!')
        }, waktu)
        } else {
            reject('Kelamaan');
        }
    })
}

// Menggunakan Then & Catch

// const coba = cobaPromise()  
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))


// Menggunakan Async Await
// Event Handle
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err)
    }
}

cobaAsync();