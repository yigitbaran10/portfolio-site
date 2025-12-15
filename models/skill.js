const db = require('./db');

class Skill {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM skills');
        return rows;
    }

    static async create(data) {
        await db.query('INSERT INTO skills(name, percent) VALUES(?, ?)',
            [data.name, data.percent]);
    }

    static async delete(id) {
        await db.query('DELETE FROM skills WHERE id = ?', [id]);
    }
}

module.exports = Skill;
