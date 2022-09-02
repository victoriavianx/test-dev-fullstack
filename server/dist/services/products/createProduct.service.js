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
const utils_1 = require("../../utils");
const createProductService = ({ productName, description, category, condition, price, }) => __awaiter(void 0, void 0, void 0, function* () {
    const products = app_1.database.collection("products");
    const date = new Date();
    const newProduct = {
        productName,
        description,
        category,
        condition,
        price,
        created_At: (0, utils_1.formatDateToISOString)(date),
    };
    yield products.add(newProduct);
    return newProduct;
});
exports.default = createProductService;
