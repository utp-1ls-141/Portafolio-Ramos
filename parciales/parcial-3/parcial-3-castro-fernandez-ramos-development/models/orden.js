const mongoose = require('mongoose');

let Usuario = require('./usuario');
let Servicio = require('./servicio');

var Schema = mongoose.Schema;

var ordenSchema = new Schema({
    _idUsuario:{type:Schema.Types.ObjectId,refs:Usuario}, //Referencia al usuario que esta realizando la orden
    detalle:[{tipo:String,qty:Number,nota:String,sevicios:[{type:Schema.Types.ObjectId,refs:Servicio}]}],
    precio:Number, //Seria la suma de todos los _idServicio.precio, yo diria que se guardara por si algun dia el precio cambia
    fechaOrden:{type:Date, default:Date.now},
    fechaRetorno:Date,
    estado:String
    },{collection:'orden'});

var Orden = mongoose.model('Orden', ordenSchema);

module.exports = Orden;