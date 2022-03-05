"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class Server {
    constructor() {
        this.StartServer();
    }
    StartServer() {
        const PORT = parseInt(process.env.PORT) || 3000;
        app_1.app.app.listen(PORT, () => {
            console.log(`SERVER running on http://localhost:${PORT} `);
        });
    }
}
const server = new Server();
