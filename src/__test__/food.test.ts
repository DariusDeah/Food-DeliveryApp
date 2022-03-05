import supertest from 'supertest';
import { app } from '../app';
import { foodController } from '../controller/foodController';
class FoodsTest {
  private ApiServer: Express.Application;
  //taking the base route for the api endpoint from the controller to make testing more dynamic
  private baseRoute = foodController.baseRoute
  constructor() {
    this.ApiServer = app.app
    this.RouteIdTest();
    this.validRoute();
    this.validRoute();
  }
  private RouteIdTest():void {
    describe('GET /foods/:id', () => {
      describe('if food does not exist ', () => {
        it('should return 404', async () => {
          const foodId = '123'
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
    describe('if post request is successful', () => {
      it('should return 201', async () => {
        await supertest(this.ApiServer).post(this.baseRoute)
      })
    })
  }
}
const foodTest = new FoodsTest()