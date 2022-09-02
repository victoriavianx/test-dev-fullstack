"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const appError_1 = require("../../errors/appError");
const listSpecificProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const productsCollection = app_1.database.collection("products");
    const snapshot = yield productsCollection.get();
    const products = snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
    const product = products.filter((product) => product.id === productId);
    if (product.length === 0) {
        throw new appError_1.AppError(404, "Product not found");
    }
    return product;
});
exports.default = listSpecificProductService;
