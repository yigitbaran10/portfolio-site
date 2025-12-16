const db = require('./db'); // db.js zaten dummy DB olacak

class Education {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM education');
    return rows;
  }

  static async create(data) {
    await db.query(
      'INSERT INTO education(level, school, year, gpa) VALUES (?, ?, ?, ?)',
      [data.level, data.school, data.year, data.gpa]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM education WHERE id = ?', [id]);
  }
}

module.exports = Education;
