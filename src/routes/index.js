const { Router } = require('express');
const router = Router();
const gamesController = require('../controllers/gamesController');

router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API esta funcionando"
    }
    res.json(data);
});

router.get('/api/list', gamesController.list);//lista de items
router.get('/api/list/:id', gamesController.show);//buscar por id
router.post('/api/list', gamesController.add);//agregar nuevo item
router.put('/api/list/:id', gamesController.update);//actualizar
router.delete('/api/list/:id', gamesController.delete);//borrar

module.exports = router;