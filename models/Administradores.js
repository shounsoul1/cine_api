import mongoose from 'mongoose'

const admin = new mongoose.Schema({
    DNI:{
        required: true,
        type: Number
    },
    nombres:{
        required: true,
        type: String
    },
    apellidos:{
        required: true,
        type: String
    },
    fecha_nacimiento:{
        required: true,
        type: String
    },
    rol:{
        required: true,
        type: String
    },
    telefono:{
        required: true,
        type: String
    },
    correo:{
        required: false,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    username:{
        required: true,
        type: String
    }
})

export default mongoose.model('Administradores', admin)