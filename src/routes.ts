import express from "express";
import DomainController from "./controllers/DomainController";
import UseController from "./controllers/UserController";

const routes = express.Router();

routes.post("/users", UseController.create);
routes.get("/users", UseController.findAll);
routes.get("/users/:userId", UseController.findOne);
routes.put("/users/:userId", UseController.update);
routes.delete("/users/:userId", UseController.destroy);

routes.post("/domains", DomainController.create);
routes.get("/domains", DomainController.findAll);
routes.get("/domains/type/:domainType", DomainController.findType);
routes.get("/domains/:domainId", DomainController.findOne);
routes.put("/domains/:domainId", DomainController.update);
routes.delete("/usdomainsers/:domainId", DomainController.destroy);

export default routes;
