// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Declare unique favorite color with set
// First user
let firstUserColor = new Set([
    'Yellow',
    'Pink',
    'White',
    'Purple'
]);

// Second user
let secondUserColor = new Set([
    'Blue',
    'Black',
    'Grey'
]);

// Declare whether user have pet or not using map
let isHavePet = new Map();
isHavePet.set('Monica', 'Yes');
isHavePet.set('Wendy', 'No');

// Declare education with array of objects
// First user
const firstUserEdu = [
    {
        name: 'SD 01',
        city: 'Jakarta',
        graduate: 2016
    },
    {
        name: 'SMP 02',
        city: 'Jakarta',
        graduate: 2019
    },
    {
        name: 'SMA 03',
        city: 'Tangerang'
    }
]

// Second user
const secondUserEdu = [
    {
        name: 'SD 02',
        city: 'Jakarta',
        graduate: 2010
    },
    {
        name: 'SMP 03',
        city: 'Bogor',
        graduate: 2013
    },
    {
        name: 'SMA 01',
        city: 'Surabaya',
        graduate: 2016,
    },
    {
        name: 'Universitas Maju',
        city: 'Tangerang'
    }
]

// Declare unique restaurant with set
// First user
let firstUserRestaurant = new Set([
    'Bento',
    'Sushi',
    'Pancake',
    'Eggy',
    'Tempura',
    'Bento',
    'Eggy',
    'Padang',
    'Tteok',
    'Sushi',
    'Sushi'
]);

// Second user
let secondUserRestaurant = new Set([
    'Tempura',
    'Bento',
    'Sushi',
    'Pancake',
    'Padang',
    'Katsu',
    'Geprek',
    'Pancake',
    'Eggy'
])

const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: firstUserColor,
    isHavePet: isHavePet.get('Monica'),
    education: firstUserEdu,
    favoriteRestaurant: firstUserRestaurant
};

const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: secondUserColor,
    isHavePet: isHavePet.get('Wendy'),
    education: secondUserEdu,
    favoriteRestaurant: secondUserRestaurant
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};