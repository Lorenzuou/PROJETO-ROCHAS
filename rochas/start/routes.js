'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


/** Autenticação */
Route.post('/autenticar', 'SessionController.create')

Route.get('/', () => {
  return "Olá mundo ;)"
})

/** Usuário */
Route.post('/users', 'UserController.create')



/** Bloco */
Route.post('/cadastroBloco','BlocoController.create')

/** Chapa */
Route.post('/cadastroChapa','ChapaController.create')

/** Cavalete */
Route.post('/cadastroCavalete','CavaleteController.create')