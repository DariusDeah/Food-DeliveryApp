import { app } from "./app";

class Server {
  private static instance: Server;
  constructor() {
    this.StartServer();
  }
  public static getInstance(): Server {
    if (this.instance == null) {
      return new Server();
    }
    return this.instance;
  }
  StartServer(): void {
    const PORT = parseInt(process.env["PORT"] as string) || 3000;
    app.listen(PORT, () => {
      console.log(`SERVER running on http://localhost:${PORT} 🚀🌑`);
    });
  }
}

const server: Server =   Server.getInstance()
