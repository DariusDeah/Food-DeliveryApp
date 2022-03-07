import db from "../DB.config"
import { IFood } from "../interfaces/food.interface";
 class Food {
   async create(data:IFood) {
    let sql = `INSERT INTO foods (
      name,
      price,
      size,
      calories
      ${data.image ? ',image' : ''}
    )
    VALUES(
      name,
      price,
      size,
      calories
      ${data.image ? ',image' : ''}
    )`
     const [newFood, _] = await db.query(sql,data)
    return newFood;
  }
   async find(query?: {}) {
     const queryKeys = Object.keys(query)
     if (queryKeys.length) {
      const food = await this.findByQuery(query)
       return food
    }
    //if theres a query find by the query otherwise retrieve all from the table
    const sql = `SELECT id,name,price,size,image From foods`
    const food = await db.query(sql)
    return food[0]
   }
   private async findByQuery(query: {}) {
     const queryKeys: string[] = Object.keys(query);
     const queryValues:string[] = Object.values(query)

     const sql =`SELECT id,name,price,size,image FROM foods
                    WHERE ${queryKeys[0]} = '${queryValues[0]}'
                  ${ queryKeys.length > 1 ?
                  `AND ${queryKeys[1]} = '${queryValues[1]}'` : ''
     }`
     const food = await db.query(sql)
     console.log(sql)
     return food[0]
   }
  async findById(id:string) {
    const sql = `SELECT id,name,price,size,image FROM foods WHERE id = ${id}`
    const food = await db.query(sql)
    return food[0]
  }
  
}
export const FoodDB = new Food()