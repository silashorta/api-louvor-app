const database = require('../models');

class IntegrantesController {
  static async pegaTodosOsIntegrantes(req, res) {
    try {
      const todosOsIntegrantes = await database.integrantes.findAll();
      return res.status(200).json(todosOsIntegrantes);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async pegaUmIntegrante(req, res) {
    const { id } = req.params

    try {
      const umaPessoa = await database.integrantes.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(umaPessoa)
    } catch (error) {
      res.status(500).json({ erro: error.message })
    }
  }

  static async criaIntegrante(req, res) {
    const novoIntegrante = req.body

    try {
      const novoIntegranteCriado = await database.integrantes.create(novoIntegrante)
      return res.status(200).json(novoIntegranteCriado)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }

  static async atualizaIntegrante(req, res) {
    const { id } = req.params
    const novasInfos = req.body

    try {
      await database.integrantes.update(novasInfos, {
        where: {
          id: Number(id)
        }
      })
      const integranteAtualizado = database.integrantes.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(integranteAtualizado)
    } catch (error) {
      res.status(500).json({ erro: error.message })
    }
  }

  static async deletaIntegrante(req, res) {
    const { id } = req.params
    try {
      await database.integrantes.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ mensagem: `O integrante de id ${id} foi deletado com sucesso!` })
    } catch (error) {
      res.status(500).json({ erro: error.message })
    }
  }
}

module.exports = IntegrantesController;
