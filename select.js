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

// Singer.find({ name: 'Teo1' })
// .then(singers => console.log(singers));

// Singer.findOne({ name: 'Teo1' })
// .then(singer => console.log(singer));

// Singer.findById('5b05675edf054d235a06005a')
// .then(singer => console.log(singer))
// .catch(error => console.log(error));
