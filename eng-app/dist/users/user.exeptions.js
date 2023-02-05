"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDataExeption = void 0;
const common_1 = require("@nestjs/common");
class NoDataExeption extends common_1.HttpException {
    constructor() {
        super('data was not loaded, please restart page', 500);
    }
}
exports.NoDataExeption = NoDataExeption;
//# sourceMappingURL=user.exeptions.js.map