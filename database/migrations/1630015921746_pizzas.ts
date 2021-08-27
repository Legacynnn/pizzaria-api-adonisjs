import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pizzas extends BaseSchema {
  protected tableName = 'pizzas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer("price").notNullable()
      table.text('ingredients').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
