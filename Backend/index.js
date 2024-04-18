const express =require("express");
const mainRouter = require('./Routes/mainRouter');

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/v1", mainRouter);
app.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})  // all the requests which will come to /api/v1 will be redirected to Routes folder in that index.js we have defined the route for /api/v1

try {
    app.listen(3000);
    console.log("Server Started");
} catch (error) {
    error.message("Error Occured!!")
}
