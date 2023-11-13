const database = require('../models');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config();



class UsuariosController {
  static async pegaTodosOsUsuarios(req, res) {
    try {
      const todosOsUsuarios = await database.usuarios.findAll();
      return res.status(200).json(todosOsUsuarios);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async criaUsuario(req, res) {
    const novoUsuario = req.body;

    try {
      // Verifique se o email já está em uso
      const usuarioExistente = await database.usuarios.findOne({
        where: {
          email: novoUsuario.email,
        },
      });

      if (usuarioExistente) {
        return res.status(400).json({ erro: "Email já em uso" });
      }

      // Use o bcrypt para gerar um hash da senha
      const senhaCriptografada = await bcrypt.hash(novoUsuario.password, 10); // 10 é o número de saltos (salt rounds)

      // Substitua a senha original pela senha criptografada
      novoUsuario.password = senhaCriptografada;

      // Crie o novo usuário com a senha criptografada
      const novoUsuarioCriado = await database.usuarios.create(novoUsuario);
      return res.status(200).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await database.usuarios.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Compare a senha fornecida com a senha criptografada armazenada no banco de dados
      const senhaCorrespondente = await bcrypt.compare(password, user.password);

      if (!senhaCorrespondente) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Se as credenciais estiverem corretas, você pode gerar um token de autenticação aqui, se necessário
      const token = jwt.sign({ 
        userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Defina a expiração do token (por exemplo, 1 hora)
      });
  
      // Redirecione o usuário para a página inicial ou envie uma resposta de login bem-sucedida
      return res.status(200).json(
        {
          message: 'Login bem-sucedido',
          name: user.name,
          token
        });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = UsuariosController