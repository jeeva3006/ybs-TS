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
const helper_1 = require("./../helper");
class DB {
    constructor() {
        this.pool = null;
        this.connect = () => {
            if (this.pool)
                return this.pool;
            else
                return this.pool = (0, mysql2_1.createPool)(config_1.databaseCredentials);
        };
        this.execute = (query, params) => __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connect();
            return new Promise((resolve, reject) => {
                conn.query(query, params, (err, results) => {
                    if (err)
                        return reject(err);
                    else
                        return resolve(results);
                });
            });
        });
        this.kill = () => {
            if (this.pool) {
                setTimeout(() => {
                    this.pool.end();
                    this.pool = null;
                    return (0, helper_1.danger)('Connection Destroyed...');
                }, 5000);
            }
            else
                return (0, helper_1.danger)('No Connection to kill.');
        };
    }
}
exports.DB = DB;
