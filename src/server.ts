import App from './app'

class Server extends App{
  constructor() {
    super();
    this.StartServer()
  }
  StartServer():void {
    const PORT = parseInt(process.env.PORT as string) || 3000
    this.app.listen(PORT, () => {
      console.log(`SERVER running on http://localhost:${PORT} `)
    })
  }
  
}
new App()
new Server()