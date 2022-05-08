import  { app } from './app'

class Server{
  constructor() {
    this.StartServer()
  }
  StartServer():void {
    const PORT = parseInt(process.env["PORT"] as string) || 3000
    app.app.listen(PORT, () => {
      console.log(`SERVER running on http://localhost:${PORT} `)
    })
  }
  
}

const server = new Server()