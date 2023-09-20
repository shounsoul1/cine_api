import {Router} from 'express'
import {getAllAdmins, registrarAdmin, actualizarAdmin, borrarAdmin} from '../controllers/admin.controllers.js';
import { getAllEmpleados, registrarEmpleado, actualizarEmpleado, borrarEmpleado} from '../controllers/empleado.controllers.js';
import {getAllClientes,registrarCliente, actualizarCliente, borrarCliente} from '../controllers/cliente.controllers.js'
const router = Router();

// admin
router.get('/getAllAdmins', getAllAdmins)
router.post('/registrarAdmin', registrarAdmin)
router.put('/actualizarAdmin/:id', actualizarAdmin)
router.delete('/borrarAdmin/:id', borrarAdmin)

// empleado
router.get('/getAllEmpleados',getAllEmpleados)
router.post('/registrarEmpleado', registrarEmpleado)
router.put('/actualizarEmpleado/:id', actualizarEmpleado)
router.delete('/borrarEmpleado/:id', borrarEmpleado)

// cliente
router.get('/getAllClientes',getAllClientes)
router.post('/registrarCliente', registrarCliente)
router.put('/actualizarCliente:/id', actualizarCliente)
router.delete('/borrarCliente:/id', borrarCliente)



export default router;