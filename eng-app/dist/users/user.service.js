"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const moks_1 = require("../moks");
const user_filter_1 = require("./user.filter");
const user_exeptions_1 = require("./user.exeptions");
let UserService = class UserService {
    constructor() {
        this.users = moks_1.users;
    }
    getUsers() {
        if (this.users == null) {
            throw new user_exeptions_1.NoDataExeption();
        }
        return this.users;
    }
    async createUser(createUserDTO) {
        return createUserDTO;
    }
};
__decorate([
    (0, common_1.UseFilters)(new user_filter_1.NoDataExeptionFilter()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserService.prototype, "getUsers", null);
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map