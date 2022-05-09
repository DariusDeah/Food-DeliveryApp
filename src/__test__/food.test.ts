import supertest from 'supertest';
import { app } from '../app';
import { foodController } from '../Foods/food.controller';
import { FoodDTO, sizes } from '../Foods/food.interface';
class FoodsTest {
  private ApiServer: Express.Application;
  //taking the base route for the api endpoint from the controller to make testing more dynamic
  private baseRoute = foodController.baseRoute
  constructor() {
    this.ApiServer = app
    this.RouteIdTest();
    this.validRoute();
    this.validRoute();
    this.postRequest();
  }
  private RouteIdTest():void {
    describe('GET /foods/:id', () => {
      describe('if food does not exist ', () => {
        it('should return 404', async () => {
          const foodId = '12345678910'
          await supertest(this.ApiServer).get(`${this.baseRoute}/${foodId}`).expect(404)
        });
        describe('if food does exist', () => {
          it('should return 200', async () => {
            const foodId = '1'
            await supertest(this.ApiServer).get(`${this.baseRoute}/${foodId}`).expect(200)
          })
        })
      });
    });
  }
  private validRoute():void {
    describe('GET /foods', () => {
      describe('if foods exist', () => {
        it('should return 200', async () => {
          await supertest(this.ApiServer).get(this.baseRoute).expect(200)
        })
      })
      
    })
  }

  private postRequest() {
    describe('POST /foods', () => {
      describe('if post request is successful', () => {
        const reqBody: FoodDTO = {
          id: Math.random() * 1000,
          name: "endpointTest",
          price: "1234",
          size: sizes.small,
          calories: 44,
          image: "",
          length: undefined
        }
        it('should return 201', async () => {
          await supertest(this.ApiServer).post(this.baseRoute).send(reqBody).expect(201)
        })
      })

    })
    describe('If POST request is unsuccessful', () => {
      const reqBody = {
             name: "test",
              price: "12",
              size: "",
              calories: 44,
              image: "",
      }
      it('should return a 400', async () => {
        await supertest(this.ApiServer).post(this.baseRoute).send(reqBody).expect(400)
      })
    })

  }
}
const foodTest = new FoodsTest()