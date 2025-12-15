const db = require('./db');

class Project {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM projects');
        return rows;
    }

    static async create(data) {
        await db.query(
            'INSERT INTO projects(title, tech, category, description) VALUES (?, ?, ?, ?)',
            [data.title, data.tech, data.category, data.description]
        );
    }

    static async delete(id) {
        await db.query('DELETE FROM projects WHERE id = ?', [id]);
    }
}

module.exports = Project;
