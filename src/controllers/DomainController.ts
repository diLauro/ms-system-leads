import { Request, Response } from "express";
import { DomainModel } from "../database/models/DomainModel";

class DomainController {
  async findAll(req: Request, res: Response) {
    const domains = await DomainModel.findAll();
    return domains.length > 0
      ? res.status(200).json(domains)
      : res.status(204).send();
  }

  async findType(req: Request, res: Response) {
    const { domainType } = req.params;
    const domains = await DomainModel.findAll({
      where: {
        type_domain: domainType
      }
    });
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
    const { name, type_domain, cod_domain } = req.body;

    const domain = await DomainModel.create({
      name,
      type_domain,
      cod_domain,
      is_active: true,
    });

    return res.status(201).json(domain);
  }

  async update(req: Request, res: Response) {
    const { domainId } = req.params;
    const { name, type_domain, cod_domain } = req.body;
    await DomainModel.update(
      {
        name,
        type_domain,
        cod_domain,
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
