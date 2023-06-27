const mongoose = require('mongoose');
const {
  DB_USER, DB_PASSWORD
} = process.env;


const URI =  `mongodb+srv://cubo1991:cubazo@cluster0.s3smhyw.mongodb.net/?retryWrites=true&w=majority ` || 'mongodb://127.0.0.1/cosmicapp'


mongoose.set('strictQuery', false);
mongoose.connect(URI)
.then(db =>console.log("DB is connect"))
.catch(err => console.log(err))


module.exports= mongoose