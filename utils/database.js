import Sequelize from 'sequelize';
const { DataTypes } = Sequelize;

const db = new Sequelize({
  dialect: 'mysql',
  database: 'first-db',
  username: 'root',
  password: '',
  host: 'localhost'
});

const user = db.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

export { db, user }; 
