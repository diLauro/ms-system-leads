import { Request, Response } from "express";
import { SalesmanModel } from "../database/models/SalesmanModel";

class SalesmanController {
  async findAll(req: Request, res: Response) {
    const salesmans = await SalesmanModel.findAll();
    return salesmans.length > 0
      ? res.status(200).json(salesmans)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { salesmanId } = req.params;
    const salesman = await SalesmanModel.findOne({
      where: {
        id: salesmanId,
      },
    });

    return salesman ? res.status(200).json(salesman) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const salesman = await SalesmanModel.create({
      name,
      is_active: true,
    });

    return res.status(201).json(salesman);
  }

  async update(req: Request, res: Response) {
    const { salesmanId } = req.params;
    const { name, isActive } = req.body;
    await SalesmanModel.update(
      {
        name,
        is_active: isActive,
      },
      {
        where: {
          id: salesmanId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { salesmanId } = req.params;
    await SalesmanModel.destroy({ where: { id: salesmanId } });

    return res.status(204).send();
  }
}

export default new SalesmanController();
