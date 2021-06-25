const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./routers/userRouter');

var app = express();

// Middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded());

// Session
app.use(
  session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true,
    user: {},
    cart: { cartItems: [], total: 0 },
    error: {},
    cookie: { maxAge: 3600000 * 24 * 1 }, // 1day
  })
);

// View engine
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/shoe_shop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use('/user', userRouter);
app.get('/', async (req, res) => {
  console.log({ ss: req.session });
  const isLogin = req.session.user ? true : false;
  res.render('index', { isLogin });
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
