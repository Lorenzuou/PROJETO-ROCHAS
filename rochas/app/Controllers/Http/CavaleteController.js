'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cavaletes
 */
class CavaleteController {
  /**
   * Show a list of all cavaletes.
   * GET cavaletes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new cavalete.
   * GET cavaletes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const data = request.except(["token"]);
    console.log(data);
    const cavalete = await Cavalete.create(data)

    return response.send(cavalete);
  
  }

  /**
   * Create/save a new cavalete.
   * POST cavaletes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single cavalete.
   * GET cavaletes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const cavalete = Cavalete.find(params.id); 
  
    return response.send(cavalete); 
  }

  /**
   * Render a form to update an existing cavalete.
   * GET cavaletes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const data = request.except(["token"]);
    const cavalete = Cavalete.find(params.id); 
    if(cavalete.user_id ==! auth.user.id) {
      return response.status(401);
    }
    cavalete.content = data['content'];
    cavalete.save();
    return response.send(cavalete); 

  }

  /**
   * Update cavalete details.
   * PUT or PATCH cavaletes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a cavalete with id.
   * DELETE cavaletes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const chapa = await Chapa.findOrFail(params.id);
    console.log(auth.user.id)
    
    if(chapa.user_id ==! auth.user.id) {
      return response.status(401);
    }

    return chapa.delete()
  }
  }


module.exports = CavaleteController
