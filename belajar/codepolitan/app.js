// function hasilfunction(params) {
//     const rand= Math.random()

//     if (rand > 0.10) {
//         return function () {
//             console.log(`selamat anda lolos`);  
//         }
//     }
//     else{
//         return function () {
//             console.log(`Mohon maaf anda tidak lolos`);
//         };
//     }
// }

// function myfun() {
//     console.log('h1');
// }



// const myMath = {
//     perkalian : function (x,y) {
//         return x * y;
//     }
// }

//     // method this
// const saya = {
//     nama : 'rizky',
//     hobi : 'mancing',
//     kenalan : function() {
//         return `hi, saya ${this.nama} hobi saya adalah ${this.hobi}`
//     }
// }
// saya.nama = 'siti'

// console.log(saya.kenalan());

try {
    saya.kenalan()
} catch (error) {
    console.log(`err`);
    
}

saya.kenalan()