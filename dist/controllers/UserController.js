"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _UserModel = require('../database/models/UserModel');

class UserController {
  async findAll(req, res) {
    const users = await _UserModel.UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  async findOne(req, res) {
    const { userId } = req.params;
    const user = await _UserModel.UserModel.findOne({
      where: {
        id: userId,
      },
    });

    return user ? res.status(200).json(user) : res.status(204).send();
  }

  async create(req, res) {
    const { email, name, idade } = req.body;

    const user = await _UserModel.UserModel.create({
      email,
      name,
    });

    return res.status(201).json({...user, createUser: "hanson"});
  }

  async update(req, res) {
    const { userId } = req.params;
    const { email, name } = req.body;
    await _UserModel.UserModel.update(
      {
        email,
        name,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.status(204).send();
  }

  async destroy(req, res) {
    const { userId } = req.params;
    await _UserModel.UserModel.destroy({ where: { id: userId } });

    return res.status(204).send();
  }
}

exports. default = new UserController();
