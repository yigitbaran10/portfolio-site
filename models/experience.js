const db = require('./db');

class Experience {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM experience');
        return rows;
    }

    static async create(data) {
        await db.query(
            'INSERT INTO experience(role, company, period, description) VALUES (?, ?, ?, ?)',
            [data.role, data.company, data.period, data.description]
        );
    }

    static async delete(id) {
        await db.query('DELETE FROM experience WHERE id = ?', [id]);
    }
}

module.exports = Experience;
