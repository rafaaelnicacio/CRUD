const menuItems = require("../models/menuItems");
module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;
    if (!id) {
      return response.status(400).json({ error: "invalid Id" });
    }
    try {
      const items = await menuItems.findById(id);
      response.item = items;
      if (!items) {
        response.status(400).json({ error: "Item não encontrado." });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
    next();
  },
};
