'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChapaSchema extends Schema {
  up () {
    this.create('chapas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('chapas')
  }
}

module.exports = ChapaSchema
