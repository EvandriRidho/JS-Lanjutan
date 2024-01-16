//Cara Membuat Object Pada Javascript
//1.Object Literal
let mhs = {
    nama : "Evandri Ridho Hasmono",
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama},Selamat Makan!`);
    }

}

//2.Function Declaration
const MethodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },
    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
    },
    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur!`);
    }
}

function Mahasiswa(nama,energi) {
    let mahasiswa = Object.create(MethodMahasiswa); //Object.Create() untuk mengubungkan dengan object lain
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let Evandri = Mahasiswa("Evandri", 10);

//3.Construction Function
function Mahasiswa(nama,energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
    }
}
let Davina = new Mahasiswa("Davina", 10);

//4.Prototype
function Mahasiswa(nama,energi) {

    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `halo ${This.nama}, Selamat Bermain!`;
};

let Evan = new Mahasiswa("Evan", 5);

//5.Class
class Mahasiswa {
    constructor(nama,energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += jam;
        return `halo ${This.nama}, Selamat Makan!`;
    }
}

let nasywa = new Mahasiswa("Nasywa", 10);