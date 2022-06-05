import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const ticket = db.define('tickets',{
    customer_id:{
        type: DataTypes.INTEGER
    },
   // ticket_id:{
   //     type: DataTypes.INTEGER
   // },    
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updatedAt:{
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});


export default ticket;