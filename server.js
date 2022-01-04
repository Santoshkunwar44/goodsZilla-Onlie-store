const express = require("express");
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-Ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;

//assets
app.use(express.static("public"))
//set Template Engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cart",(req,res)=>{
  res.render("customer/cart")
})
app.get("/register",(req,res)=>{
  res.render("auth/register")
})
app.get("/login",(req,res)=>{
  res.render("auth/login")
})
app.listen(PORT, () => console.log(`server started at ${PORT}`));
