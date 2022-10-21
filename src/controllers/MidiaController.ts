import { Request, response, Response } from "express";
import { MidiaModel } from "../database/models/MidiaModel";
import PDFPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
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

  async report(req: Request, res: Response) {
    const fonts = {
      Helvetica: {
        normal: "Helvetica",
        bold: "Helvetica-Bold",
        italics: "Helvetica-Oblique",
        bolditalics: "Helvetica-BoldOblique",
      },
    };

    const printer = new PDFPrinter(fonts);
    const docDefenitions: TDocumentDefinitions = {
      userPassword: "123",
      ownerPassword: "123456",
      defaultStyle: { font: "Helvetica" },
      content: [
        {
          text: "Teste 1",
        },
      ],
    };
    const pdfDoc = printer.createPdfKitDocument(docDefenitions);

    const chunks = [];
    pdfDoc.on("data", (chunk) => {
      chunks?.push(chunk);
    });

    // pdfDoc.on().end();

    pdfDoc.end();

    pdfDoc.on("end", () => {
      const result = Buffer.concat(chunks);
      return res.status(200).end(result);
    });
  }
}

export default new MidiaController();
