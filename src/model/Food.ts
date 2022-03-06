import db from "../DB.config"
 class Food {
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
   async find(query?: {}) {
     const queries = Object.keys(query)
     if (queries.length) {
      const food = await this.findByQuery(query)
       return food
    }
    //if theres a query find by the query otherwise retrieve all from the table
    const sql = `SELECT * From foods`
    const food = await db.query(sql)
    return food[0]
   }
   private async findByQuery(query: {}) {
     const queries: string[] = Object.keys(query);
     const queryValues:string[] = Object.values(query)

     const sql =
     `SELECT * FROM foods
     WHERE ${queries[0]} = '${queryValues[0]}'
      AND ${queries[1]} = '${queryValues[1]}'`
     const food = await db.query(sql)
     console.log(sql)
     return food[0]
   }
  async findById(id:string) {
    const sql = `SELECT * FROM foods WHERE id = ${id}`
    const food = await db.query(sql)
    return food[0]
  }
  
}
export const FoodDB = new Food()