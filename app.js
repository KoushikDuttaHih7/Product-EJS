const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs')
app.set('views','views')
// 1st views is the key, 2nd views is the directry
// views allows us to tell express where to find these dynamic views. 
// So what we can do here is we can app set and set the view here,

const port = 4000;

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(port, () => {
  console.log('Server started at http://localhost:4000/');
});
