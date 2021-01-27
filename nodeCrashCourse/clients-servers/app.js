const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { login, pw, db } = require('./secrets');

const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

const dbURI = `mongodb+srv://${login}:${pw}@cluster0.l6tbh.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// middleware & static files

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
