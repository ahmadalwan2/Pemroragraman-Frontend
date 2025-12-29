// === Cara menggunakkan Function didalam JavaScript === //

// Function adalah blok kode yang dapat dijalankan kembali untuk melakukan tugas tertentu
// --- Macam-macam function di JavaScript: 
// - Function declaration
// - Function expression
// - Arrow function

// 1. Function declaration:
function sapa(nama) {
    console.log(`Halo ${nama}`);
}
sapa("Ucup");

// 2. Function expression:
const salam = function (nama) {
    console.log(`Assalamu'alaikum ${nama}`);
}
salam("Alwan");

// 3. Arrow function
const ucap = (nama) => {
    console.log(`Selamat datang, ${nama}`);
}
ucap("Beli");