"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlers = void 0;
class ErrorHandler {
    routerError(app) {
        app.all('*', (req, res) => res.status(404).json({
            status: 'Fail',
            error: `route not found at ${req.url}`,
        }));
    }
    error(app) {
        app.use((err, req, res, next) => res.status(err.status || 500).json({
            status: err.status || 500,
            message: err.message,
            path: req.url
        }));
    }
}
exports.ErrorHandlers = new ErrorHandler();
