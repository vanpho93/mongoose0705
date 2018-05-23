const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean0705')
.then(() => console.log('Database connected'))
.catch(error => console.log('Cannot connect database', error));

const singerSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    link: { type: String, require: true, unique: true, trim: true },
    image: { type: String, required: true, unique: true, trim: true }
});

const Singer = mongoose.model('Singer', singerSchema);

Singer.find({})
.then(singers => console.log(singers));

// const singer = new Singer({
//     name: 'Teo',
//     link: 'http://fb.com/teo',
//     image: 'http://fb.com/teo.png'
// });
// singer.save()
// .then(s => console.log(s))
// .catch(error => console.log(error));

// Singer.insertMany([
//     { name: 'Karik', link: 'https://mp3.zing.vn/nghe-si/Karik', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/a/0/a0927398989d4c5b18c56880bd56442b_1509531352.jpg' },
//     { name: 'Đức Phúc', link: 'https://mp3.zing.vn/nghe-si/Duc-Phuc', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg' },
//     { name: 'Châu Khải Phong', link: 'https://mp3.zing.vn/nghe-si/Chau-Khai-Phong', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/a/ca59799621e1c9fd8652cd947713acfa_1509951552.jpg' },
// ])
// .then(x => console.log(x))
// .catch(error => console.log(error));

/*
    Connect √
    Tao 1 cai collection √
    Tao documents
    Select
    Insert
    Update
    Delete
*/
