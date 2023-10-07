console.log("---------------------------------------------------");
console.log("=============== IF ELSE , NESTED IF ===============");
//IF, ELSE, NESTED IF
usia = 20

if(usia <=5 ){
    console.log("Balita");
} else if(usia <=12){
    console.log("Anak-Anak");
} else if(usia <=20){
    console.log("Remaja");
} else if(usia <=35){
    console.log("Dewasa Muda");
} else if(usia <=50){
    console.log("Dewasa");
}
else{
    console.log("Lansia");
}


console.log("---------------------------------------------------");
console.log("=================== SWITCH CASE ===================");


//SWITCH CASE
let bulan = 3
switch(bulan){
    case 1:
    console.log("Bulan Januari");
    break;
    case 2:
    console.log("Bulan Februari");
    break;
    case 3:
    console.log("Bulan Maret");
    break;
    case 4:
    console.log("Bulan April");
    break;
    case 5:
    console.log("Bulan Mei");
    break;
    case 6:
    console.log("Bulan Juni");
    break;
    case 7:
    console.log("Bulan Juli");
    break;
    case 8:
    console.log("Bulan Agustus");
    break;
    case 9:
    console.log("Bulan September");
    break;
    case 10:
    console.log("Bulan Oktober");
    break;
    case 11:
    console.log("Bulan November");
    break;
    case 12:
    console.log("Bulan Desember");
    break;
    default:
        alert("1 Tahun hanya 12 bulan");
}



console.log("---------------------------------------------------");
console.log("================== FOR STATEMENT ==================");


//FOR STATEMENT
let nama = ["Alif Essa Nurcahyani", "Fathiya Salsabila", "Sekar Rodesti", "Alvyonita Christy", "Lathifa Asy Syahidah"]
let nim = [12021070001, 12021070002, 12021070003, 12021070004, 12021070005]

for (let i = 0; i < nama.length; i++){
    let nama_mahasiswa = nama[i];
    let nim_mahasiswa = nim[i];
    console.log(`Nama : ${nama_mahasiswa} , Nim : ${nim_mahasiswa}`);
}

console.log("---------------------------------------------------");
console.log("================= WHILE, DO WHILE =================");

//WHILE,DO WHILE
let desa = ["Rantau Buddha", "Rantau Jaya", "ManungguL Lama", "Manunggul Baru"]
let index = 0;

while (index < desa.length) {
    console.log(desa[index]);
    index++;
    
}

console.log("---------------------------------------------------");
let kota = ["Kota Baru", "Tanah Bumbu", "Tanah Laut", "Banjar Baru", "Banjarmasin", "Martapura"]
let indeks = 0;

do{
    console.log(kota[indeks]);
    indeks++;
} while (indeks < kota.length) {
    
}


console.log("---------------------------------------------------");
console.log("===================== FUNCTION ====================");

//FUNCTION
function welcome(nama = "Alif Essa Nurcahyani") {
    console.log("Halo, " + nama + "!!! Selamat Datang di Website kami");
}

welcome(); 



