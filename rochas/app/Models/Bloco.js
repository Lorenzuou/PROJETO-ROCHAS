'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Bloco extends Model {



    

    chapas () {
        return this.hasMany('App/Models/Chapa')
    }
    
     
    
}





module.exports = Bloco
