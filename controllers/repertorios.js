const database = require('../models');

class RepertorioController {
  static async pegaTodasAsMusicas(req, res) {
    try {
      const todasAsMusicas = await database.repertorio.findAll();
      return res.status(200).json(todasAsMusicas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }


  static async PegaUmaMusica(req, res) {
    const { id } = req.params

    try {
      const umaMusica = await database.repertorio.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(umaMusica)
    } catch (error) {
      res.status(500).josn({ erro: error.message })
    }
  }


  static async criaMusica(req, res) {
    const novaMusica = req.body

    try {
      const novaMusicaCriada = await database.repertorio.create(novaMusica)
      return res.status(200).json(novaMusicaCriada)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }


  static async atualizaMusica(req, res) {
    const { id } = req.params
    const novasInfos = req.body

    try {
      await database.repertorio.update(novasInfos, {
        where: {
          id: Number(id)
        }
      })
      const musicaAtualizada = database.repertorio.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(musicaAtualizada)
    } catch (error) {
      res.status(500).json({ erro: error.message })
    }
  }


static async deletaMusica(req, res){
  const { id } = req.params
  try {
    await database.repertorio.destroy({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json({mensagem: `A música de id ${id} foi deletado com sucesso!`})
  } catch (error) {
    res.status(500).json({ erro: error.message})
  }
}
}

module.exports = RepertorioController