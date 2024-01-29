// Rest Parameter -> argument pd function dengan jumlah tak terbatas menjadi array

function myFunc(...myArgs) {

    return myArgs
}

console.log(myFunc(1,2,3,4,5));


function jumlahkan(...angka) {
    // let total = 0;
    // for(const a of angka) { // Menggunakan for..of
    //     total += a;
    // }

    return angka.reduce((acc, value) => acc + value); // Menggunakan reduce
}

console.log(jumlahkan(1,2,3,4,5));


// Array Destruvturing
const kel1 = ['Evandri','Davina','Nasywa', 'Lili'];
const [ketua, wakil,...anggota] = kel1;
console.log(ketua);

// Object Destructuring
const team = {
    pm: 'Evandri',
    FE1: 'Davina',
    FE2: 'Nasywa',
    BE: 'Lili',
    UX: 'Mala'
}

const {pm, ...dev} = team;
console.log(dev);


// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1,2,'Evandri', false, 10, true, 'Nasywa'))