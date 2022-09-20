import { Request, Response } from "express";
import { LeadPhoneModel } from "../database/models/LeadPhoneModel";

class LeadPhoneController {
  async findAll(req: Request, res: Response) {
    const phones = await LeadPhoneModel.findAll();
    return phones.length > 0
      ? res.status(200).json(phones)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { phoneId } = req.params;
    const leadPhone = await LeadPhoneModel.findOne({
      where: {
        id: phoneId,
      },
    });

    return leadPhone ? res.status(200).json(leadPhone) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { phone, idLead } = req.body;

    const leadPhone = await LeadPhoneModel.create({
      phone,
      lead_id: idLead,
    });

    return res.status(201).json(leadPhone);
  }

  async update(req: Request, res: Response) {
    const { phoneId } = req.params;
    const { phone, idLead } = req.body;
    await LeadPhoneModel.update(
      {
        phone,
        lead_id: idLead,
      },
      {
        where: {
          id: phoneId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { phoneId } = req.params;
    await LeadPhoneModel.destroy({ where: { id: phoneId } });

    return res.status(204).send();
  }
}

export default new LeadPhoneController();
