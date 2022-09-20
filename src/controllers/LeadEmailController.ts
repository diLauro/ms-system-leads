import { Request, Response } from "express";
import { LeadEmailModel } from "../database/models/LeadEmailModel";

class LeadPhoneController {
  async findAll(req: Request, res: Response) {
    const emails = await LeadEmailModel.findAll();
    return emails.length > 0
      ? res.status(200).json(emails)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { mailId } = req.params;
    const leadEmail = await LeadEmailModel.findOne({
      where: {
        id: mailId,
      },
    });

    return leadEmail ? res.status(200).json(leadEmail) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { email, idLead } = req.body;

    const leadEmail = await LeadEmailModel.create({
      email,
      lead_id: idLead,
    });

    return res.status(201).json(leadEmail);
  }

  async update(req: Request, res: Response) {
    const { mailId } = req.params;
    const { email, idLead } = req.body;
    await LeadEmailModel.update(
      {
        email,
        lead_id: idLead,
      },
      {
        where: {
          id: mailId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { mailId } = req.params;
    await LeadEmailModel.destroy({ where: { id: mailId } });

    return res.status(204).send();
  }
}

export default new LeadPhoneController();
