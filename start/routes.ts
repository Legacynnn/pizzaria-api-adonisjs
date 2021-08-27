import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/pizza', 'PizzasController.store')
Route.get('/pizzas', 'PizzasController.index')
Route.get('/pizza/:name', 'PizzasController.show')

Route.get('/order/:id', 'OrdersController.createOrder')