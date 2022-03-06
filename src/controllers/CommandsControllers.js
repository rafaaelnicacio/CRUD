const { response } = require("express");
const { v4: uuid } = require("uuid");
const itemCommand = require("../models/itemsCommands");

module.exports = {
  async index(request, response) {
    try {
      const Command = await itemCommand.find();
      return response.status(200).json({ Command });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  async create(request, response) {
    const { name, wholePrice, halfPrice } = request.body;
    if (!name || !wholePrice) {
      return response
        .status(400)
        .json({ error: "Nome e preço inteiro são obrigatórios." });
    }
    const item = new itemCommand({
      _id: uuid(),
      name,
      wholePrice,
      halfPrice,
    });
    try {
      await item.save();
      return response
        .status(201)
        .json({ message: "Item adicionado à comanda" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  },
  async update(request, response) {
    const { name, halfPrice, wholePrice } = request.body;
    if (!name && !wholePrice) {
      return response
        .status(400)
        .json({ error: "Você precisa informar o Nome e o valor inteiro" });
    }
    if (name) response.item.name = name;
    if (wholePrice) response.item.wholePrice = wholePrice;
    if (halfPrice) response.item.halfPrice = halfPrice;
    try {
      await response.item.save();
      return response
        .status(200)
        .json({ message: "item atualizado com sucesso" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
  async delete(request, response) {
    try {
      await response.item.remove();
      return response.status(200).json({ message: "Item removido da Comanda" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
