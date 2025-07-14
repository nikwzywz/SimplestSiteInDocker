const pool = require('./db');

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Успешное подключение к базе данных! Время на сервере:', res.rows[0].now);
  } catch (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } finally {
    await pool.end();
  }
}

testConnection(); 