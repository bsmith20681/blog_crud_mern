const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//bring routes
const postRoutes =  require('./routes/post');
const authRoutes =  require('./routes/auth');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log("🎬 Database is online!"))
  .catch(err => {
    console.log(err);
  })

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// cors
if (process.env.NODE_ENV === 'development'){
  app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

//routes middleware
app.use('/api', postRoutes);
app.use('/api', authRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`🕹️ Server is running on port ${port}`);
});
