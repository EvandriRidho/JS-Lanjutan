// Spread Operator -> Mecah iterables mnjadi single element

const mySelf= ['Evandri'];
// 1. Menggabungkan 2 Array
const jkt = ['Zee', 'Freya', 'Adel'];

const harem = [...mySelf, 'indira',...jkt];
console.log(harem.join());


// 2. Meng-copy Array
const mySelf1 = [...mySelf];
mySelf1[1] = 'Davina';
console.log(mySelf1.join());


const li = document.querySelectorAll('li');
const mhs = [...li].map(m => m.textContent);
console.log(mhs);

const nama = document.querySelector('.namas');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;