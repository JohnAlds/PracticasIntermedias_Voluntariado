const { Router } = require('express');
const { getUsers, addUser, updateNameUser, deleteUser } = require('../controllers/users');

const router = Router();

router.get('/getUsers', getUsers);
router.post('/addUser', addUser);
router.patch('/updateUser/:id', updateNameUser);  // Cambiado a /updateUser para más claridad
router.delete('/deleteUser/:id', deleteUser);     // Cambiado a /deleteUser para más claridad

module.exports = router;
