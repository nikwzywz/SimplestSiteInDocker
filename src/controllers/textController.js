const { getUserText, saveUserText } = require('../models/userText');

async function getText(req, res) {
  const userId = req.session.userId;
  const content = await getUserText(userId);
  res.json({ content });
}

async function saveText(req, res) {
  const userId = req.session.userId;
  const { content } = req.body;
  await saveUserText(userId, content);
  res.json({ success: true });
}

module.exports = { getText, saveText }; 