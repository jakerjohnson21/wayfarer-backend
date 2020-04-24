<<<<<<< HEAD
const mongoose = require('mongoose')
=======
const mongoose = require('mongoose');
>>>>>>> 52c4a1d14f0a99fdd44f4e6119d85cde7e43cbf0
const dbUrl = process.env.MONGO_URI;

// connect to the DB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`))


// TODO: export the User
<<<<<<< HEAD
module.exports = { User: require('./User'), City: require('./City'), Post: require('./Post') }
=======
module.exports = { User: require('./User') }
>>>>>>> 52c4a1d14f0a99fdd44f4e6119d85cde7e43cbf0
