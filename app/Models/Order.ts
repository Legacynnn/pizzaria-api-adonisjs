import { DateTime } from 'luxon'
import { BaseModel, column, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Pizza from './Pizza'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pizza_id: HasOne<typeof Pizza>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
