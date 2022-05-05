const { response } = require("express");
const userModels = require("../models/user");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async create(request, response) {
    const { email } = request.body;
    try {
      if (await userModels.findOne({ email })) {
        return response.status(400).json({ error: "Usuário já cadastrado" });
      }
      const user = await userModels.create(request.body);
      user.password = undefined;
      return response
        .status(200)
        .json({ user, token: generateToken({ id: user._id }) });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  async login(request, response) {
    const { email, password } = request.body;
    const user = await userModels.findOne({ email }).select("+password");
    if (!user) {
      return response.status(400).json({ error: "Usuário não encontrado!" });
    }
    if ((await password) !== user.password) {
      return response.status(400).json({ error: "Senha ou email incorreto!" });
    }
    user.password = undefined;

    return response
      .status(200)
      .json({ user, token: generateToken({ id: user._id }) });
  },
};
