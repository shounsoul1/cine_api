import Clientes from '../models/Clientes.js'

export const getAllClientes = async (req,res)=>{
    try{
        const response = await Clientes.find();
        res.status(200).json(response)
    }catch(error){
        res.status(500).json("Error"+error)
    }
}

export const registrarCliente = async (req,res)=>{
    const cliente = Clientes({
        DNI: req.body.DNI,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_nacimiento: req.body.fecha_nacimiento,
        rol: req.body.rol,
        telefono: req.body.telefono,
        correo: req.body.correo,
        password: req.body.password,
        username: req.body.username
    })
    try{
        const save = await cliente.save();
        res.status(200).json(save)
    }catch(error){
        res.json(error)
    }
}
export const actualizarCliente = async (req,res)=>{
    try{
        const id = req.params.id;
        const datosActualizados = await req.body;
        const result = await Clientes.findByIdAndUpdate(id, datosActualizados) 
        res.status(200).json(result)
        console.log("Actualizado con exito")
    }catch(error){
        res.status(500).json({Error: "Internal server error " + error})
    }
}

export const borrarCliente = async (req,res)=>{
    try{
        const id = req.params.id
        const response = await Clientes.findByIdAndRemove(id)
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({Error: error})
    } 
}

export default{
    getAllClientes,
    registrarCliente,
    actualizarCliente,
    borrarCliente
}