require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');


const URI = process.env.MONGO_URL;

mongoose.connect(URI).then(
    () => console.log('DB Connection Established') 
)
.catch(e =>{
    console.log('error connecting to the database.')
})

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    userTempFiles : true
}))

// app.get('/',(req,res)=>{
//     res.send('hello! Server is running...')
// })


//routes
app.use('/',require('./routes/aboutRoute'));
app.use('/',require('./routes/educRoute'));
app.use('/',require('./routes/experienceRoute'));
app.use('/user',require('./routes/userRoute'));
app.use('/contact',require('./routes/contactRoute'));
app.use('/',require('./routes/projectRoute'));
app.use('/',require('./routes/upload'));

PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server listening on port:${PORT}`);
})

