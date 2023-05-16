const {Ator} = require('../model');

class AtorController {
    constructor() {};

    async findAll(req, res) {
        try {
            const allItems = await Ator.findAll();
            res.status(200).json(allItems);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async findById(req, res) {
        try {
            const id_ator = req.params.id_ator;
            const itemsById = await Ator.findByPk(id_ator);

            if (itemsById) {
                res.status(200).json(itemsById);   
            } else {
                res.status(404).json({error: 'Ator não encontrado!'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async create(req, res) {
        try {
            const newItem = req.body;
            const createNewItem = await Ator.create(newItem);

            res.status(200).json(createNewItem);

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async update(req, res) {
        try {
            const id_ator = req.params.id_ator;
            const [updatedRows] = await Ator.update(req.body, {
                where: {id_ator},
            })

            if (updatedRows) {
                res.status(200).json({message: 'Ator atualizado com sucesso!'});
            } else {
                res.status(404).json({error: 'Ator não encontrado!'});    
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id_ator = req.params.id_ator;
            const deletedRows = Ator.destroy(req.body, {
                where: {id_ator}
            });

            if (deletedRows) {
                res.status(200).json({message: 'Ator excluído com sucesso!'});
            } else {
                res.status(404).json({error: 'Usuário não encontrado'});
            }

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = AtorController;