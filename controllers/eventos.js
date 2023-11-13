const database = require('../models');
const moment = require('moment');


class eventosController {
  static async pegaTodosOsEventos(req, res) {
    try {
      const todosOsEventos = await database.evento.findAll({
        include: [
          {
            model: database.integrantes,
            through: 'eventoIntegrantes', // Nome da tabela intermediária
          },
          {
            model: database.repertorio,
            through: 'eventoRepertorio', // Nome da tabela intermediária
          },
        ],
      });

      // Formate as datas e horas dos eventos usando Moment.js
      const eventosFormatados = todosOsEventos.map(evento => ({
        ...evento.toJSON(),
        data: moment(evento.data).format('YYYY-MM-DD'),
        hora: moment(evento.hora, 'HH:mm:ss').format('HH:mm'),
      }));
      return res.status(200).json(eventosFormatados);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async pegaUmEvento(req, res) {
    const { id } = req.params;

    try {
      const umEvento = await database.evento.findByPk(id, {
        include: [
          {
            model: database.integrantes,
            through: 'eventoIntegrante',
          },
          {
            model: database.repertorio,
            through: 'eventoRepertorio',
          },
        ],
      });

      if (!umEvento) {
        return res.status(404).json({ mensagem: 'Evento não encontrado' });
      }

      return res.status(200).json(umEvento);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async criaEvento(req, res) {
    const novoEvento = req.body;

    try {
      // Formatando as datas usando Moment.js
      novoEvento.data = moment(novoEvento.data, 'YYYY-MM-DD').toDate();
      novoEvento.hora = moment(novoEvento.hora, 'HH:mm').format('HH:mm:ss');

      const eventoCriado = await database.evento.create(novoEvento);

      // Associar integrantes ao evento
      if (novoEvento.integrantes && novoEvento.integrantes.length > 0) {
        await eventoCriado.addIntegrantes(novoEvento.integrantes);
      }

      // Associar músicas ao evento
      if (novoEvento.repertorios && novoEvento.repertorios.length > 0) {
        await eventoCriado.addRepertorio(novoEvento.repertorios);
      }

      return res.status(200).json(eventoCriado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async atualizaEvento(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      const [atualizacoes] = await database.evento.update(novasInfos, {
        where: {
          id: Number(id),
        },
      });

      if (atualizacoes === 0) {
        return res.status(404).json({ mensagem: 'Evento não encontrado' });
      }

      const eventoAtualizado = await database.evento.findByPk(id);
      return res.status(200).json(eventoAtualizado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async deletaEvento(req, res) {
    const { id } = req.params;

    try {
      const deletado = await database.evento.destroy({
        where: {
          id: Number(id),
        },
      });

      if (!deletado) {
        return res.status(404).json({ mensagem: 'Evento não encontrado' });
      }

      return res.status(200).json({ mensagem: `O evento de ID ${id} foi deletado com sucesso` });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = eventosController;
