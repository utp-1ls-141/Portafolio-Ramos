const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    username:String,
    password:String,
    nombre:{first:String,last:String},
    rol:String,
    direccion:String,
    edad:Number,
    correo:String,
    activo:Boolean,
    },{collection:'usuario'});

    usuarioSchema.statics.insert = function(username,nombre,apellido,rol,direccion,edad,correo,callback){
        Usuario.findOne({username:username},'nombre',function(err,usuario){
            if(err){
                return callback(err)
            }
            else if(usuario){
                return callback(usuario);
            }
            else{
                var data={
                    username:username,
                    nombre:{first:nombre,last:apellido},
                    rol:rol,
                    direccion:direccion,
                    edad:edad,
                    correo:correo};
                Usuario.create(data,function(err){
                    if(err)
                        return callback(err);
                    return callback();
                })}
        })   
    }

usuarioSchema.statics.getAll=function(callback){
    Usuario.find({},function(err,users){
        if(err) 
        return callback(err);
        else if(!users){
            return callback();
        }
        callback(null,users);
    })
}
usuarioSchema.statics.update = function(id,username,nombre,apellido,rol,direccion,edad,correo, callback){
    Usuario.findOne({_id:id},function(err,usuario){
        if(err)
            return callback(err);
        else if(!usuario){
            return callback();
        }
        else{
                usuario.username = username || usuario.username;
                usuario.nombre.first = nombre || usuario.nombre.first;
                usuario.nombre.last = apellido || usuario.nombre.last;
                usuario.rol = rol || usuario.rol;
                usuario.direccion = direccion || usuario.direccion;   
                usuario.edad =edad || usuario.edad; 
                usuario.correo =correo || usuario.correo;            
                usuario.save(function(err){
                    if(err)
                        return callback(err);
                    return callback(null,true);
                });
            }
    })   
}
usuarioSchema.statics.delete = function(id, callback){
    Usuario.findOne({_id:id},'_id',function(err,usuario){
        if(err)
            return callback(err);
        else if(!usuario)
            return callback(null,'usuario no existe');
        Usuario.deleteOne({_id:id}, function(err){
                if(err)
                    return callback(err);
                return callback();//Success
            });
    })  
}
    usuarioSchema.statics.login = function(username,password,callback){
    Usuario.findOne({username:username},'username password rol',function(err,user){
        if(err)
            return callback(err);
        else if(!user)
            return callback();
        var hash = user.password;
        if(bcrypt.compareSync(password, hash))
            return callback(null,user)
        else
            return callback();
    })
}
let Usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = Usuario;