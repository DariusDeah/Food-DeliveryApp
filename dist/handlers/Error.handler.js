"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlers = void 0;
class ErrorHandler {
    routerError(app) {
        app.all("*", (req, res) => {
            res.status(404).json({
                error: {
                    status: "Fail",
                    message: `route not found at ${req.originalUrl}`,
                },
            });
        });
    }
    error(app) {
        app.use((err, req, res, next) => {
            res.status(err.status || 500).json({
                error: {
                    status: err.status || 500,
                    message: err.status == 500 ? "server error" : err.message,
                    path: req.url,
                },
            });
        });
    }
}
exports.ErrorHandlers = new ErrorHandler();
