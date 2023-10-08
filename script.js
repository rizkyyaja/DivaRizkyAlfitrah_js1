//Program javascript dengan menggunakan if, else, nested if

let umur = 13;
let izinOrtu = true;

if (umur >= 18) {
    console.log("Anda adalah seorang dewasa.");
    if (izinOrtu) {
        console.log("Anda memiliki izin dari orang tua.");
    } else {
        console.log("Maaf, Anda memerlukan izin dari orang tua.");
    }
} else {
    console.log("Anda masih di bawah umur. Anda tidak boleh masuk ke dalam klub malam.");
}




//Program javascript dengan menggunakan swicth case
let dayCode = 1;
let dayType;

switch (dayCode) {
    case 1:
    case 7:
        dayType = "Akhir pekan";
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        dayType = "Hari kerja";
        break;
    default:
        dayType = "Kode hari tidak valid";
}

console.log(`Hari dengan kode ${dayCode} adalah: ${dayType}`);




//Program javascript dengan menggunakan for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}


//Program javascript dengan menggunakan while, do while
let angka = 5;
let faktorial = 1;
let i = 1;

while (i <= angka) {
    faktorial *= i;
    i++;
}

console.log("Faktorial dari " + angka + " adalah " + faktorial);

let tebakan;
let jawaban = 7;

do {
    tebakan = parseInt(prompt("Tebak angka (antara 1 dan 10):"));
} while (tebakan !== jawaban);

console.log("Selamat, Anda menebak dengan benar! Angka yang dicari adalah 7.");




//Program javascript dengan menggunakan function
function hitungLuasPersegiPanjang(panjang, lebar) {
    let luas = panjang * lebar;
    return luas;
}

let panjang = 5 ;
let lebar = 3;
let luasPersegiPanjang = hitungLuasPersegiPanjang(panjang, lebar);
console.log("Luas Persegi Panjang: " + luasPersegiPanjang);

