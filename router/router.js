import {Router} from 'express'
import {getAllAdmins, registrarAdmin, actualizarAdmin, borrarAdmin} from '../controllers/admin.controllers.js';
import { getAllEmpleados, registrarEmpleado } from '../controllers/empleado.js';
import {getAllClientes,registrarCliente} from '../controllers/cliente.controllers.js'
const router = Router();

// admin
router.get('/getAllAdmins', getAllAdmins)
router.post('/registrarAdmin', registrarAdmin)
router.put('/actualizarAdmin/:id', actualizarAdmin)
router.delete('/borrarAdmin/:id', borrarAdmin)

// empleado
router.get('/getAllEmpleados',getAllEmpleados)
router.post('/registrarEmpleado', registrarEmpleado)
// router.put('/actualizarEmpleado' actualizarempleado)
// router.delete('/borrarEmpleado', borrarEmpleado)

// cliente
router.get('/getAllClientes',getAllClientes)
router.post('/registrarCliente', registrarCliente)
// router.put('/actualizarCliente' actualizarCliente)
// router.delete('/borrarCliente', borrarCliente)



export default router;