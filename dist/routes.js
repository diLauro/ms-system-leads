"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _DomainController = require('./controllers/DomainController'); var _DomainController2 = _interopRequireDefault(_DomainController);
var _UserController = require('./controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const routes = _express2.default.Router();

routes.post("/users", _UserController2.default.create);
routes.get("/users", _UserController2.default.findAll);
routes.get("/users/:userId", _UserController2.default.findOne);
routes.put("/users/:userId", _UserController2.default.update);
routes.delete("/users/:userId", _UserController2.default.destroy);

routes.post("/domains", _DomainController2.default.create);
routes.get("/domains", _DomainController2.default.findAll);
routes.get("/domains/:domainId", _DomainController2.default.findOne);
routes.put("/domains/:domainId", _DomainController2.default.update);
routes.delete("/usdomainsers/:domainId", _DomainController2.default.destroy);

exports. default = routes;
