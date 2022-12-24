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
exports.DB = void 0;
const mysql2_1 = require("mysql2");
const config_1 = require("../config");
class DB {
    constructor() {
        this.connect = () => {
            if (this.pool)
                return this.pool;
            else
                return this.pool = (0, mysql2_1.createPool)(config_1.databaseCredentials);
        };
        this.execute = (query, params) => __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connect();
            const result = yield conn.query(query, params);
            return Array.isArray(result) ? result[0] : [];
        });
        this.kill = () => {
            if (this.pool) {
                this.pool.kill();
                return console.log('Connection Destroyed');
            }
            else
                return 'No Connection to kill';
        };
        this.pool = null;
    }
}
exports.DB = DB;
