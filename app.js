const express = require('express');
const app = express()
const port = process.env.port || 5030;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const path = require("path")

const data ={
    "name":"shivank",
    "college":"biet jhansi",
};

app.use(cors())
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/user"))
mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log(" databse  connected successfully")
})


mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})

// serving the frontend
// app.use(express.static(path.join(__dirname, "./frontend/build")))

// app.get("*", (req, res) => {
//     res.sendFile(
//         path.join(__dirname, "./frontend/build/index.html"),
//         function (err) {
//             res.status(500).send(err)
//         }
//     )
// })
app.get('/',(req,res)=>{
    res.json(data);
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})