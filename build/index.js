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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const { sequelize } = require('./src/sequelize/models');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, routes_1.default)(app);
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Checking database connection...');
    try {
        yield sequelize.authenticate();
        console.log('Database connection established.');
    }
    catch (e) {
        console.log('Database connection failed', e);
        process.exit(1);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield connectDb();
    console.log(`Attempting to run server on port ${port}`);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}))();
