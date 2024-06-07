"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../../controllers/auth/auth.controller");
var authRoutes = (0, express_1.Router)();
authRoutes.post('/register', auth_controller_1.default.store);
authRoutes.post('/login', auth_controller_1.default.login);
authRoutes.post('/refresh', auth_controller_1.default.refresh);
authRoutes.post('/logout', auth_controller_1.default.logout);
exports.default = authRoutes;