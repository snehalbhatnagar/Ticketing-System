import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const logins = db.define('login_details',{
    Employee_ID:{
        type: DataTypes.INTEGER
    },
   Email:{
      type: DataTypes.STRING
    },    
    password:{
      type: DataTypes.STRING
    }},
{
    freezeTableName: true
}
);


export default logins;