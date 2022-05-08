import * as dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config({ path: "./.env" });

const db = mysql.createPool({
  user: process.env["user "] as string,
  host: process.env["host"] as string,
  password: process.env["password"] as string,
  database: process.env["database"] as string,
});
export default db.promise();
