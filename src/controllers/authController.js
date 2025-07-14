const bcrypt = require('bcrypt');
const { findUserByUsername, createUser } = require('../models/user');

async function register(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Необходимо указать логин и пароль');
  }
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    return res.status(409).send('Пользователь с таким логином уже существует');
  }
  const passwordHash = await bcrypt.hash(password, 10);
  await createUser(username, passwordHash);
  res.status(201).send('Пользователь успешно зарегистрирован!');
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Необходимо указать логин и пароль');
  }
  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).send('Неверный логин или пароль');
  }
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    return res.status(401).send('Неверный логин или пароль');
  }
  req.session.userId = user.id;
  res.redirect('/text.html');
}

module.exports = { register, login }; 