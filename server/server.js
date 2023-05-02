const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())


const mongoURL = 'mongodb+srv://GroupQ:Sp23Cs322@storecluster.f6uqmzv.mongodb.net/?retryWrites=true&w=majority'
main().catch(err => console.log(err));

const http = require("http");
const host = 'localhost';
const port = 8000;

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

app.get('/', function (req, res) {
    res.send("This is the computer store server.");
  });

require("./userSchema");
const User = mongoose.model("UserInfo")

app.post('/register', async(req, res) => { // Confirmation of user creation API
    console.log(req.body);
    const {name, email, phone, password} = req.body;

    try {
        await User.create({
            name,
            email,
            phone,
            password,
        });
        res.send({status: "OK."})
    } 
    catch (error){
        res.send({status: "Something went wrong. Try again."})
    }

});

async function main() {
  await mongoose.connect
    (mongoURL, {useNewUrlParser:true}).then(()=>{console.log("Connected to the database.");});
}