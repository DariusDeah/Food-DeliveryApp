import db from "../DB.config"

// interface IFood{
//   name: string
//   price: number
//   size: string
//   calories: number
//   isActive: boolean 
// }
export  class Food {
  async create(data: { name: string, price: number, size: string, calories: number }) {
    let sql = `INSERT INTO foods (
      name,
      price,
      size,
      calories
    )
    VALUES(
      '${data.name}',
       ${data.price},
       '${data.size}',
       ${data.calories}
    )`
    console.log(data)
    const [newFood, _] = await db.execute(sql)
    return newFood;
  }
  async find(query: string, value: string) {
    //if theres a query find by the query otherwise retrive all from the table
    const sql = `SELECT * From foods ${query && value ? `WHERE ${query} ="${value}"` : ''}`
    console.log(sql)
    const food = await db.query(sql)
    // food[1] = undefined
    return food[0]
  }
  async findById(id:string) {
    const sql = `SELECT * FROM foods WHERE id = ${id}`
    const food = await db.query(sql)
    return food
  }
  
}
