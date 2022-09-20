import express from "express";
import DomainController from "./controllers/DomainController";
import LeadController from "./controllers/LeadController";
import LeadEmailController from "./controllers/LeadEmailController";
import LeadPhoneController from "./controllers/LeadPhoneController";
import MidiaController from "./controllers/MidiaController";
import UseController from "./controllers/UserController";

const routes = express.Router();

routes.post("/leads", LeadController.create);
routes.get("/leads", LeadController.findAll);
routes.get("/leads/:leadId", LeadController.findOne);
routes.put("/leads/:leadId", LeadController.update);
routes.delete("/leads/:leadId", LeadController.destroy);

routes.post("/leads/phones", LeadPhoneController.create);
routes.get("/leads/phones", LeadPhoneController.findAll);
routes.get("/leads/phones/:phoneId", LeadPhoneController.findOne);
routes.put("/leads/phones/:phoneId", LeadPhoneController.update);
routes.delete("/leads/phones/:phoneId", LeadPhoneController.destroy);

routes.post("/leads/emails", LeadEmailController.create);
routes.get("/leads/emails", LeadEmailController.findAll);
routes.get("/leads/emails/:phoneId", LeadEmailController.findOne);
routes.put("/leads/emails/:phoneId", LeadEmailController.update);
routes.delete("/leads/emails/:phoneId", LeadEmailController.destroy);


routes.post("/users", UseController.create);
routes.get("/users", UseController.findAll);
routes.get("/users/:userId", UseController.findOne);
routes.put("/users/:userId", UseController.update);
routes.delete("/users/:userId", UseController.destroy);

routes.post("/midias", MidiaController.create);
routes.get("/midias", MidiaController.findAll);
routes.get("/midias/:midiaId", MidiaController.findOne);
routes.put("/midias/:midiaId", MidiaController.update);
routes.delete("/midias/:midiaId", MidiaController.destroy);

routes.post("/domains", DomainController.create);
routes.get("/domains", DomainController.findAll);
routes.get("/domains/type/:domainType", DomainController.findType);
routes.get("/domains/:domainId", DomainController.findOne);
routes.put("/domains/:domainId", DomainController.update);
routes.delete("/usdomainsers/:domainId", DomainController.destroy);

export default routes;
