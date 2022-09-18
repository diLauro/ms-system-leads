import { Request, Response } from "express";
import { DomainModel } from "../database/models/DomainModel";

class DomainController {
  async findAll(req: Request, res: Response) {
    const domains = await DomainModel.findAll();
    return domains.length > 0
      ? res.status(200).json(domains)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { domainId } = req.params;
    const domain = await DomainModel.findOne({
      where: {
        id: domainId,
      },
    });

    return domain ? res.status(200).json(domain) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { name, cod_domain, is_active } = req.body;

    const domain = await DomainModel.create({
      name,
      cod_domain,
      is_active,
    });

    return res.status(201).json(domain);
  }

  async update(req: Request, res: Response) {
    const { domainId } = req.params;
    const { name, cod_domain, is_active } = req.body;
    await DomainModel.update(
      {
        name,
        cod_domain,
        is_active,
      },
      {
        where: {
          id: domainId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { domainId } = req.params;
    await DomainModel.destroy({ where: { id: domainId } });

    return res.status(204).send();
  }
}

export default new DomainController();
