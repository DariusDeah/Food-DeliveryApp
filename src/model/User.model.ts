import db from "../DB.config"


class User{
  async create(userData:{first_name: string, last_name: string, email: string, password: string}) {
    `INSERT INTO users (first_name,last_name,email) 
    VALUES(${userData.first_name},${userData.last_name},${userData.email},${userData.password})`
  }
  async find(){
    const sql = `SELECT first_name AS FirstName, last_name AS LastName, email AS Email, FROM users `
    const users = await db.query(sql)
return users[0]
  }
}