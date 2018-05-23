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

// 1. Xoa nhieu docs co dieu kien
// Singer.deleteMany({})
// .then(x => console.log(x))
// .catch(error => console.log(error));
// 2. Xoa nhieu 1 doc co dieu kien
// Singer.findOneAndRemove({ name: 'Karik 123' })
// .then(singer => console.log(singer))
// .catch(error => console.log(error));
// 3. Xoa nhieu 1 doc theo id
// Singer.findByIdAndRemove('5b056608dc75ff23112422f9')
// .then(singer => console.log(singer))
// .catch(error => console.log(error));
