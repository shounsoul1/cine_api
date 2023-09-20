import Administradores from '../models/Administradores.js';

export const getAllAdmins = async function (req,res){
    try{
        const response = await Administradores.find();
    res.status(200).json(response)
    }catch(error){
        res.status(500).json("Error"+error)
    }
}

export const registrarAdmin = async function(req,res){
    const admin = Administradores({    
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
        const save = await admin.save();
        res.status(200).json(save)
    }catch(error){
        res.status(500).json('Error interno')
    }
}

export const actualizarAdmin = async (req,res)=>{
    try{
        const id = req.params.id;
        const datosActualizados = await req.body;
        const result = await Administradores.findByIdAndUpdate(id, datosActualizados) 
        res.status(200).json(result)
        console.log("Actualizado con exito")
    }catch(error){
        res.status(500).json({Error: "Internal server error " + error})
    }
}

export const borrarAdmin = async (req,res)=>{
    try{
        const id = req.params.id
        const response = await Administradores.findByIdAndRemove(id)
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({Error: error})
    } 
}

export default {
    getAllAdmins,
    registrarAdmin, 
    actualizarAdmin,
    borrarAdmin
}
