'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with chapas
 */
class ChapaController {
  /**
   * Show a list of all chapas.
   * GET chapas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new chapa.
   * GET chapas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const data = request.except(["token"]);
    console.log(data);
    const Chapa = await chapa.create(data)

    return response.send(Chapa);
  
  }

  /**
   * Create/save a new chapa.
   * POST chapas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single chapa.
   * GET chapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const chapa = Chapa.find(params.id); 
  
    return response.send(chapa); 
  }

  /**
   * Render a form to update an existing chapa.
   * GET chapas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const data = request.except(["token"]);
    const chapa = Chapa.find(params.id); 
    if(chapa.user_id ==! auth.user.id) {
      return response.status(401);
    }
    chapa.content = data['content'];
    chapa.save();
    return response.send(chapa); 

  }

  /**
   * Update chapa details.
   * PUT or PATCH chapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a chapa with id.
   * DELETE chapas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ChapaController
