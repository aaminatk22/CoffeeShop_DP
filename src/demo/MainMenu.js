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
var CoffeeShop_1 = require("../services/CoffeeShop");
var readline = require("readline");
var InventoryManager_1 = require("../services/InventoryManager");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.shop = new CoffeeShop_1.CoffeeShop();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    MainMenu.prototype.showMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var choice, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 10];
                        console.log('\n=== Coffee Shop Main Menu ===');
                        console.log('1. Order Coffee');
                        console.log('2. View Order History');
                        console.log('3. Check Inventory');
                        console.log('4. Exit');
                        return [4 /*yield*/, this.askQuestion('Choose an option: ')];
                    case 1:
                        choice = _b.sent();
                        _a = choice;
                        switch (_a) {
                            case '1': return [3 /*break*/, 2];
                            case '2': return [3 /*break*/, 4];
                            case '3': return [3 /*break*/, 6];
                            case '4': return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.orderCoffee()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 4: return [4 /*yield*/, this.viewHistory()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        this.checkInventory();
                        return [3 /*break*/, 9];
                    case 7:
                        this.rl.close();
                        return [2 /*return*/];
                    case 8:
                        console.log('Invalid option, please try again.');
                        _b.label = 9;
                    case 9: return [3 /*break*/, 0];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    MainMenu.prototype.orderCoffee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var coffeeType, type, customizations, choice, _a, order, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('\n=== Available Coffee Types ===');
                        console.log('1. Espresso ($2.50)');
                        console.log('2. Latte ($3.00)');
                        return [4 /*yield*/, this.askQuestion('Select coffee type (1-2): ')];
                    case 1:
                        coffeeType = _b.sent();
                        switch (coffeeType) {
                            case '1':
                                type = 'espresso';
                                break;
                            case '2':
                                type = 'latte';
                                break;
                            default:
                                console.log('Invalid selection');
                                return [2 /*return*/];
                        }
                        console.log('\n=== Available Customizations ===');
                        console.log('1. Milk (+$0.50)');
                        console.log('2. Sugar (+$0.30)');
                        console.log('3. No more customizations');
                        customizations = [];
                        _b.label = 2;
                    case 2:
                        if (!true) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.askQuestion('Add customization (1-3): ')];
                    case 3:
                        choice = _b.sent();
                        _a = choice;
                        switch (_a) {
                            case '1': return [3 /*break*/, 4];
                            case '2': return [3 /*break*/, 5];
                            case '3': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 10];
                    case 4:
                        customizations.push('milk');
                        console.log('Milk added');
                        return [3 /*break*/, 11];
                    case 5:
                        customizations.push('sugar');
                        console.log('Sugar added');
                        return [3 /*break*/, 11];
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, this.shop.orderCoffee(type, customizations)];
                    case 7:
                        order = _b.sent();
                        console.log("\nOrder placed! ID: ".concat(order.id));
                        console.log("Description: ".concat(order.coffee.getDescription()));
                        console.log("Total Cost: $".concat(order.coffee.getCost().toFixed(2)));
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        console.error("Error: ".concat(error_1 instanceof Error ? error_1.message : error_1));
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                    case 10:
                        console.log('Invalid selection');
                        _b.label = 11;
                    case 11: return [3 /*break*/, 2];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    MainMenu.prototype.viewHistory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var history_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('\n=== Order History ===');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.shop.getOrderHistory()];
                    case 2:
                        history_1 = _a.sent();
                        if (history_1.length === 0) {
                            console.log('No orders yet.');
                            return [2 /*return*/];
                        }
                        history_1.forEach(function (order) {
                            console.log("\nOrder #".concat(order.id));
                            console.log("Type: ".concat(order.type));
                            console.log("Customizations: ".concat(order.options.join(', ') || 'None'));
                            console.log("Cost: $".concat(order.cost.toFixed(2)));
                            console.log("Date: ".concat(new Date(order.timestamp).toLocaleString()));
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error: ".concat(error_2 instanceof Error ? error_2.message : error_2));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MainMenu.prototype.checkInventory = function () {
        console.log('\n=== Current Inventory ===');
        console.log('Milk:', this.getStock('milk'), 'units');
        console.log('Sugar:', this.getStock('sugar'), 'units');
        console.log('Coffee Beans:', this.getStock('coffee_beans'), 'units');
    };
    MainMenu.prototype.getStock = function (ingredient) {
        return InventoryManager_1.InventoryManager.getInstance().checkStock(ingredient);
    };
    MainMenu.prototype.askQuestion = function (question) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.rl.question(question, function (answer) {
                resolve(answer.trim());
            });
        });
    };
    return MainMenu;
}());
// Execute the menu
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new MainMenu().showMenu()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
