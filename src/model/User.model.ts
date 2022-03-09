import db from "../DB.config"
import { UserDTO } from "../interfaces/user.interface"


class UserTable{
  async create(userData:UserDTO) {
   const sqlQuery =  `INSERT INTO users (fullName,email,password,phone,address,googleId) 
    VALUES()`
    const user = await db.query(sqlQuery, userData)
    userData
  }
  async find(){
    const sql = `SELECT first_name AS FirstName, last_name AS LastName, email AS Email, FROM users `
    const users = await db.query(sql)
return users[0]
  }
}
export const UserDB = new UserTable()