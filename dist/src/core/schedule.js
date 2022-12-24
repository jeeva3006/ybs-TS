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
exports.Schedule = void 0;
const node_schedule_1 = require("node-schedule");
const ybs_1 = __importDefault(require("./ybs"));
const config_1 = require("../config");
const helper_1 = require("../helper");
class Schedule {
    constructor() {
        this.ybs = new ybs_1.default;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, helper_1.info)(config_1.cronRule);
            (0, node_schedule_1.scheduleJob)('trending', config_1.cronRule, () => __awaiter(this, void 0, void 0, function* () {
                const todaysTrending = yield (0, helper_1.GET)(config_1.ytBaseURL, config_1.trendingParams);
                this.ybs.youtube(todaysTrending);
            }));
        });
    }
}
exports.Schedule = Schedule;
