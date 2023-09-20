import Empleados from '../models/Empleados.js';

export const getAllEmpleados = async function (req,res){
    try{
        const response = await Empleados.find();
    res.status(200).json(response)
    }catch(error){
        res.status(500).json("Error"+error)
    }
}

export const registrarEmpleado = async function(req,res){
    const empleado = Empleados({    
    DNI: req.body.DNI,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    fecha_nacimiento: req.body.fecha_nacimiento,
    rol: req.body.rol,
    telefono: req.body.telefono,
    correo: req.body.correo,
    password: req.body.password,
    username: req.body.username
    });
    try{
        const save = await empleado.save();
        res.status(200).json(save)
    }catch(error){
        res.status(500).json('Error interno')
    }
}
export const actualizarEmpleado = async (req,res)=>{
    try{
        const id = req.params.id;
        const datosActualizados = await req.body;
        const result = await Empleados.findByIdAndUpdate(id, datosActualizados) 
        res.status(200).json(result)
        console.log("Actualizado con exito")
    }catch(error){
        res.status(500).json({Error: "Internal server error " + error})
    }
}

export const borrarEmpleado = async (req,res)=>{
    try{
        const id = req.params.id
        const response = await Empleados.findByIdAndRemove(id)
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({Error: error})
    } 
}

export default {
    getAllEmpleados,
    registrarEmpleado,
    actualizarEmpleado,
    borrarEmpleado
}
