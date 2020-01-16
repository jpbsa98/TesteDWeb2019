var obras = require('../models/obra')


module.exports.listar = () => {
    return obras
        .find({},{'@id':1,titulo:1,tipo:1,compositor:1})
        .exec()
}

module.exports.listarId = id => {
    return obras
        .find({'@id': id})
        .exec()
}

module.exports.tipos = () => {
    return obras
        .find({},{tipo:1})
        .distinct('tipo')
        .exec()
}

module.exports.listarCompositor = comp => {
    return obras
        .find({compositor:comp})
        .exec()
}

module.exports.listarInstrumento = inst => {
    return obras
        .find({'instrumentos.designacao':inst})
        .exec()
}

module.exports.listarPartituras = () => {
    return obras
        .find({},{'@id':1,titulo:1,num:{'instrumentos.partituras':{$sum:1}}})
        .exec()
}

