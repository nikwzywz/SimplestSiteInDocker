const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const textRoutes = require('./routes/text');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Для разработки, в проде использовать secure: true с https
}));

app.use('/auth', authRoutes);
app.use('/text', textRoutes);

app.get('/text.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/text.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 