"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./database/manager");
const hello_1 = require("./hello");
console.log(hello_1.a);
const database = new manager_1.DB();
console.log(database.kill());
