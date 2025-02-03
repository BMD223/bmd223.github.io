const db = require('./database');

class Category {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  }

  static async create(name, description) {
    await db.query(
      'INSERT INTO categories (name, description) VALUES (?, ?)',
      [name, description]
    );
  }
}

module.exports = Category;