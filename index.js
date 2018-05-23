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

/*
    Connect
    Tao 1 cai collection
    Tao documents
    Select
    Insert
    Update
    Delete
*/
