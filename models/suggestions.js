const db = require('./db'); // db.js ile aynı klasörde

const Suggestions = {
  create: async ({ name, email, message }) => {
    const sql = "INSERT INTO suggestions (name, email, message, created_at) VALUES (?, ?, ?, NOW())";
    return db.execute(sql, [name, email, message]);
  },

  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM suggestions ORDER BY id DESC");
    return rows;
  },

  delete: async (id) => {
    const sql = "DELETE FROM suggestions WHERE id = ?";
    return db.execute(sql, [id]);
  }
};

module.exports = Suggestions;
