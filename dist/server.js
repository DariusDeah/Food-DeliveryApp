"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Server {
    constructor() {
        this.StartServer();
    }
    static getInstance() {
        if (this.instance == null) {
            return new Server();
        }
        return this.instance;
    }
    StartServer() {
        const PORT = parseInt(process.env["PORT"]) || 3000;
        app_1.app.listen(PORT, () => {
            console.log(`SERVER running on http://localhost:${PORT} 🚀🌑`);
        });
    }
}
const server = Server.getInstance();
