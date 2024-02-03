// Callback => Function yang dikirim sebagai parameter
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`)
// }

function tampilkanPesan(Callback) {
    const nama = prompt('Masukkan Nama: ')
    Callback(nama)
}

tampilkanPesan(nama => alert(`halo, ${nama}`))

const mhs = [ // Array of object
    {
        'nama':'Evandri Ridho Hasmono',
        'npm': '12345',
        'jurusan': 'Teknik Informatika',
        'id': 1
    },

    {
        'nama': 'Shafa Davina Arrahman',
        'npm': '23456',
        'jurusan': 'Manajemen',
        'id': 2
    },

    {
        'nama': 'Nasywa Awaliyah Ramadhani',
        'npm': '34567',
        'jurusan': 'Ekonomi Islam',
        'id': 3
    }
]

// Asynchoronous Callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

// console.log('Mulai');
// getDataMahasiswa('Web/JS Lanjutan 10', results => {
//     const mahasiswa = JSON.parse(results);
//     mahasiswa.forEach(m => console.log(m.nama));
// }, )