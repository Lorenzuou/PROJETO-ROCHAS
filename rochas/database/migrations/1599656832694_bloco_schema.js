'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlocoSchema extends Schema {
  up () {
    this.create('blocos', (table) => {
      table.increments()
      table
        .integer('id_usuario')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('nome').notNullable().unique()
      table.string('origem')

      table.timestamps()
    })
  }

  down () {
    this.drop('blocos')
  }
}

module.exports = BlocoSchema
