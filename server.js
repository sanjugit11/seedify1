require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')
const fs = require("fs");
const fileUpload = require('express-fileupload');

//App config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(fileUpload())


//routes

app.use('/api', require('./Routes/upcPoolRoutes'))
app.use('/api', require('./Routes/userRoutes'))
app.use('/api', require('./Routes/projectRoutes'))
app.use('/api', require('./Routes/icoPoolRoutes'))
app.use('/api', require('./Routes/deployIcoPoolRoutes'))

//db config
const connection_url = 'mongodb+srv://seedify:kvnHQMHJxyfZEQeM@cluster0.fv8c7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const connection_url = 'mongodb+srv://seedify:kvnHQMHJxyfZEQeM@cluster0.fv8c7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//const connection_url = 'mongodb://localhost/seedify'

//const connection_url =  'mongodb://127.0.0.1:27017'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err
    console.log('connected to mongodb')
})


//listener
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
    })
}


//listener
const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`listening port localhost : ${port}`);
})

