
//UCoHRK8uX82hTf7L




const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
'mongodb+srv://admin:UCoHRK8uX82hTf7L@cluster0.mh1c7o2.mongodb.net/Book-Store?retryWrites=true&w=majority'  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8000,() => {
        console.log("Server is running...");
    });
  })
  .catch((err) => console.log(err));