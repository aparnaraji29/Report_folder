const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aparnaraji2000:Aparna29@cluster0.bswwvwk.mongodb.net/chatapplication?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('successfully connected to MongoDB')
})
.catch((err)=>{
    console.log('Error connecting to MongoDB', err)
})

module.exports = mongoose