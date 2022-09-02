"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const firebase_1 = __importDefault(require("firebase"));
const data_source_1 = __importDefault(require("./data-source"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const handleAppError_middleware_1 = __importDefault(require("./middlewares/handleAppError.middleware"));
const app = (0, express_1.default)();
const PORT = 3000;
firebase_1.default.initializeApp(data_source_1.default);
exports.database = firebase_1.default.firestore();
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");
    app.use((0, cors_1.default)());
    next();
});
app.use("/produtos", products_routes_1.default);
app.use(handleAppError_middleware_1.default);
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
