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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeShop = void 0;
var CoffeeDB_1 = require("./CoffeeDB"); // Changed to named import
var InventoryManager_1 = require("./InventoryManager"); // Changed to named import
var CoffeeFactory_1 = require("./CoffeeFactory"); // Changed to named import
var WithMilk_1 = require("../models/WithMilk"); // Keep as named import
var WithSugar_1 = require("../models/WithSugar"); // Removed .ts extension
var CoffeeShop = /** @class */ (function () {
    function CoffeeShop() {
        this.inventory = InventoryManager_1.InventoryManager.getInstance();
        this.db = new CoffeeDB_1.CoffeeDB();
    }
    CoffeeShop.prototype.orderCoffee = function (type, options) {
        return __awaiter(this, void 0, void 0, function () {
            var coffee, _i, options_1, option, order, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coffee = CoffeeFactory_1.CoffeeFactory.createCoffee(type);
                        for (_i = 0, options_1 = options; _i < options_1.length; _i++) {
                            option = options_1[_i];
                            switch (option.toLowerCase()) {
                                case "milk":
                                    if (!this.inventory.useIngredient('milk', 1)) {
                                        throw new Error("Out of milk");
                                    }
                                    coffee = new WithMilk_1.WithMilk(coffee);
                                    break;
                                case "sugar":
                                    if (!this.inventory.useIngredient('sugar', 1)) {
                                        throw new Error("Out of sugar");
                                    }
                                    coffee = new WithSugar_1.WithSugar(coffee);
                                    break;
                            }
                        }
                        order = {
                            type: type,
                            options: options,
                            cost: coffee.getCost(),
                            description: coffee.getDescription(),
                            timestamp: new Date()
                        };
                        return [4 /*yield*/, this.db.saveOrder(order)];
                    case 1:
                        id = _a.sent();
                        return [2 /*return*/, { id: id, coffee: coffee }];
                }
            });
        });
    };
    CoffeeShop.prototype.getOrderHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.getAllOrders()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CoffeeShop;
}());
exports.CoffeeShop = CoffeeShop;
