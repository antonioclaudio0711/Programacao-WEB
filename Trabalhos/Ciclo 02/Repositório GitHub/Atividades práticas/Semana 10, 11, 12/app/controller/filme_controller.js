const Filme = require('../model');

class FilmeController {
    constructor() {};

    async findAll(req, res) {
        try {
            const allItems = await Filme.findAll();
            res.status(200).json(allItems);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async findById(req, res) {
        try {
            const id_filme = req.params.id_filme;
            const itemsById = await Filme.findByPk(id_filme);

            if (itemsById) {
                res.status(200).json(itemsById);
            } else {
                res.status(404).json({error: 'Filme não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async create(req, res) {
        try {
            const createNewItem = await Filme.create(req.body);
            res.status(200).json(createNewItem);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async update(req, res) {
        try {
            const id_filme = req.params.id_filme;
            const [updatedRows] = await Filme.update(req.body, {
                where: {id_filme}
            })

            if (updatedRows) {
                res.status(200).json({message: 'Filme atualizado com sucesso!'});
            } else {
                res.status(404).json({error: 'Filme não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id_filme = req.params.id_filme;
            const deletedRows = await Filme.destroy({
                where: {id_filme}
            })

            if (deletedRows) {
                res.status(200).json({message: 'Filme excluído com sucesso!'});
            } else {
                res.status(404).json({message: 'Filme não encontrado!'});
            }
            
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = FilmeController;