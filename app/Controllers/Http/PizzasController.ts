import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pizza from 'App/Models/Pizza'

export default class PizzasController {
  public async index ({}: HttpContextContract) {
    const pizza = Pizza.all()

    return pizza
  }

  public async store ({request}: HttpContextContract) {
    const data = request.only(['name', 'price', 'ingredients'])
    const pizza = await Pizza.create(data)
    
    return pizza
  }

  public async show ({params}: HttpContextContract) {
    const pizza = await Pizza.findOrFail(params.name)

    return pizza
  }

  public async edit ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
