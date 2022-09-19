import { Request, Response } from "express";
import { MidiaModel } from "../database/models/MidiaModel";

class MidiaController {
  async findAll(req: Request, res: Response) {
    const midias = await MidiaModel.findAll();
    return midias.length > 0
      ? res.status(200).json(midias)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { midiaId } = req.params;
    const midia = await MidiaModel.findOne({
      where: {
        id: midiaId,
      },
    });

    return midia ? res.status(200).json(midia) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { name } = req.body;

    const midia = await MidiaModel.create({
      name,
      is_active: true,
    });

    return res.status(201).json(midia);
  }

  async update(req: Request, res: Response) {
    const { midiaId } = req.params;
    const { name, type_domain, cod_domain, is_active } = req.body;
    await MidiaModel.update(
      {
        name,
        type_domain,
        cod_domain,
        is_active,
      },
      {
        where: {
          id: midiaId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    const { midiaId } = req.params;
    await MidiaModel.destroy({ where: { id: midiaId } });

    return res.status(204).send();
  }
}

export default new MidiaController();
