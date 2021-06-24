// FileName:Midterm Test
//Author's Name: Wen Xu
//Student ID:301098127
// Web App name: Favourite Book List web app 


"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', (req, res, next) => {
    res.render('content/index', {
        title: 'Home',
        page: 'home',
        books: ''
    });
});
//# sourceMappingURL=index.js.map