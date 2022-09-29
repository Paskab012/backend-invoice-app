"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
function api() {
    const router = (0, express_1.Router)();
    router
        .use((req, res, next) => {
        if (!req.body) {
            next(new Error('Bad request'));
            return;
        }
        next();
    })
        .use('/v1', apiV1())
        .use((req, res, next) => {
        res.json({
            error: 'Invalid route',
        });
    });
    return router;
}
exports.default = api;
function apiV1() {
    const router = (0, express_1.Router)();
    router
        .use((req, res, next) => {
        console.log('API V1');
        next();
    })
        .use('/users', (0, user_1.default)());
    return router;
}
