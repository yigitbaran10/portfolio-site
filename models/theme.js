const db = require('./db');

class Theme {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM themes');
        return rows;
    }

    static async create(data) {
        await db.query(
            'INSERT INTO themes(name, color) VALUES (?, ?)',
            [data.name, data.color]
        );
    }

    static async delete(id) {
        await db.query('DELETE FROM themes WHERE id = ?', [id]);
    }
}

module.exports = Theme;
