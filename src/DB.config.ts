import * as dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config({ path: "./.env" });

const db = mysql.createPool({
  user: process.env.user  ,
  host: process.env.host ,
  password: process.env.password ,
  database: process.env.database ,
});
export default db.promise();
