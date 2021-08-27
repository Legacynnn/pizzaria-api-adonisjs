import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async createOrder ({params}: HttpContextContract) {
    const order = await Order.create(params.id)

    return order
  }
}
