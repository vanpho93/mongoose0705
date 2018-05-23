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

// Singer.find({})
// .then(singers => console.log(singers));

// 1. update tat ca

// Singer.updateMany({ __v: 100 })
// .then(x => console.log(x));

// 2. update co dieu kien

// Singer.findOneAndUpdate({ name: 'Đức Phúc' }, { __v: 200 }, { new: true })
// .then(x => console.log(x));

// 3. update theo id

// Singer.findOneAndUpdate({ _id: '5b05675edf054d235a06005a' }, { __v: 4000 })
// .then(x => console.log(x));

// Singer.findByIdAndUpdate('5b05675edf054d235a06005a', { __v: 4000 })
// .then(x => console.log(x));
