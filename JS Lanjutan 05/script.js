//  Template Literals
const nama = 'Evandri Ridho';
const umur = 19;
console.log(`Halo, nama saya ${nama}, umur saya ${umur} tahun.`);

const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); // Ternary adala operator pengkondisian

// 1. HTML Fragment

// let mhs = {
//     nama : "Evandri Ridho Hasmono",
//     umur : 19,
//     npm : "50422473",
//     email : 'evandriridho@gundar.ac.id'
// }

// let el = `<div class='mhs'>
//     <h2>${mhs.nama}</h2>
//     <span class='npm'>${mhs.npm}</span>
// </div>`;


// 2. Looping

// const mhs = [
//     {
//         nama : 'Evandri Ridho Hasmono',
//         email : 'evandriridho@gundar.ac.id'
//     },

//     {
//         nama : 'Shafa Davina Arrahman',
//         email : 'shafadavina@trisakti.ac.id'
//     },

//     {
//         nama : 'Nasywa Awaliyah Ramadhan',
//         email : 'shafadavina@uii.ac.id'
//     }
// ];

// const el = `<div class='mhs'>
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditionals

// const lagu = {
//     judul : 'Lantas',
//     penyanyi : 'Juicy Luicy',
//     feat : 'Mr. x'
// }

// const el = `<div class='lagu'> 
//     <ul> 
//         <li> ${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4. Nested

const mhs = {
    nama : 'Evandri Ridho Hasmono',
    semester : 3,
    mataKuliah : ['ALgoritma', 'Struktur Data', 'Golang', 'SQL']
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class='mhs'> 
    <h2>${mhs.nama}</h2>
    <span class='semester'>Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;

// Tagged Template

function coba(strings, ...values) { // ...values untuk menampung jumlah variabel yang tidak diketahui berapa banyak
    // let result = '';
    // strings.forEach((str, i) => { // forEach untuk loop array tanpa membuat array baru
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
    // Reduce untuk menggabungkan array
}

const str = coba `halo, nama saya ${nama}, saya ${umur} tahun.` // Coba adalah tag template
console.log(str);