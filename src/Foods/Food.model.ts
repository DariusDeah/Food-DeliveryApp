import db from "../DB.config"
import { FoodDTO } from "./food.interface";
 class FoodTable {
   async create(food: FoodDTO):Promise<FoodDTO> {
     console.log(food.image)
    let sqlQuery = `INSERT INTO foods (
      name,
      price,
      size,
      calories
      ${food.image ? ',image' : ''}
    )
    VALUES(
       ?,
       ?,
      ?,
      ?
      ${food.image ? ',?' : ''}
    )`
     const [createdFood,_] = await db.query(sqlQuery,[food.name,food.price,food.size,food.calories,food.image ? food.image : ''])
     console.log(createdFood)
    return createdFood;
  }
   async find(query?: {}):Promise<FoodDTO> {
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
   private async findByQuery(query: {}):Promise<FoodDTO> {
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
  async findById(id:string):Promise<FoodDTO> {
    const sql = `SELECT id,name,price,size,image FROM foods WHERE id = ${id}`
    const food = await db.query(sql)
    return food[0]
  }
  
}
export const FoodDB = new FoodTable()