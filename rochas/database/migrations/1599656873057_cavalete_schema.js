'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CavaleteSchema extends Schema {
  up () {
    this.create('cavaletes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cavaletes')
  }
}

module.exports = CavaleteSchema
