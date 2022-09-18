"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _DomainModel = require('../database/models/DomainModel');

class DomainController {
  async findAll(req, res) {
    const domains = await _DomainModel.DomainModel.findAll();
    return domains.length > 0
      ? res.status(200).json(domains)
      : res.status(204).send();
  }

  async findOne(req, res) {
    const { domainId } = req.params;
    const domain = await _DomainModel.DomainModel.findOne({
      where: {
        id: domainId,
      },
    });

    return domain ? res.status(200).json(domain) : res.status(204).send();
  }

  async create(req, res) {
    const { name, cod_domain, is_active } = req.body;

    const domain = await _DomainModel.DomainModel.create({
      name,
      cod_domain,
      is_active,
    });

    return res.status(201).json(domain);
  }

  async update(req, res) {
    const { domainId } = req.params;
    const { name, cod_domain, is_active } = req.body;
    await _DomainModel.DomainModel.update(
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

  async destroy(req, res) {
    const { domainId } = req.params;
    await _DomainModel.DomainModel.destroy({ where: { id: domainId } });

    return res.status(204).send();
  }
}

exports. default = new DomainController();
