"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.RoleEnumType = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
var RoleEnumType;
(function (RoleEnumType) {
    RoleEnumType["USER"] = "user";
    RoleEnumType["ADMIN"] = "admin";
})(RoleEnumType = exports.RoleEnumType || (exports.RoleEnumType = {}));
let User = class User extends model_entity_1.default {
    toJSON() {
        return Object.assign(Object.assign({}, this), { password: undefined, verified: undefined });
    }
};
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Index)('email_index'),
    (0, typeorm_1.Column)({
        unique: true,
    })
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: RoleEnumType,
        default: RoleEnumType.USER,
    })
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'default.png',
    })
], User.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false,
    })
], User.prototype, "verified", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;
