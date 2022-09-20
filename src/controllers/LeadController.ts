import { Request, Response } from "express";
import { LeadModel } from "../database/models/LeadModel";

class LeadController {
  async findAll(req: Request, res: Response) {
    const leads = await LeadModel.findAll();
    return leads.length > 0
      ? res.status(200).json(leads)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { leadId } = req.params;
    const lead = await LeadModel.findOne({
      where: {
        id: leadId,
      },
    });

    return lead ? res.status(200).json(lead) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { name, cpf, cnh, idService, idMidia, idOrigem, msg, idStatus } =
      req.body;

    const lead = await LeadModel.create({
      name,
      cpf,
      cnh,
      service_id: idService,
      midia_id: idMidia,
      origem_id: idOrigem,
      msg,
      status_id: idStatus,
    });

    return res.status(201).json(lead);
  }

  async update(req: Request, res: Response) {
    const { leadId } = req.params;
    const { name, cpf, cnh, idService, idMidia, idOrigem, msg, idStatus } =
      req.body;
    await LeadModel.update(
      {
        name,
        cpf,
        cnh,
        service_id: idService,
        midia_id: idMidia,
        origem_id: idOrigem,
        msg,
        status_id: idStatus,
      },
      {
        where: {
          id: leadId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { leadId } = req.params;
    await LeadModel.destroy({ where: { id: leadId } });

    return res.status(204).send();
  }
}

export default new LeadController();
