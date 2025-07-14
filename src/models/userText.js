const pool = require('./db');

async function getUserText(user_id) {
  const res = await pool.query('SELECT content FROM user_texts WHERE user_id = $1', [user_id]);
  return res.rows[0]?.content || '';
}

async function saveUserText(user_id, content) {
  // Если запись уже есть — обновить, иначе вставить
  const res = await pool.query(
    `INSERT INTO user_texts (user_id, content, updated_at)
     VALUES ($1, $2, NOW())
     ON CONFLICT (user_id) DO UPDATE SET content = EXCLUDED.content, updated_at = NOW()`,
    [user_id, content]
  );
  return res.rowCount > 0;
}

module.exports = { getUserText, saveUserText }; 