import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'snehal', 'snehal@123', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});
db.sync({});
export default db;