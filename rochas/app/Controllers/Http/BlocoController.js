'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with blocos
 */

const Bloco = use("App/Models/Bloco")
class BlocoController {
  /**
   * Show a list of all blocos.
   * GET blocos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new bloco.
   * GET blocos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const data = request.except(["token"]);
    console.log(data);
    const bloco = await Bloco.create(data)

    return response.send(bloco);

  }

  /**
   * Create/save a new bloco.
   * POST blocos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single bloco.
   * GET blocos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const bloco = Bloco.find(params.id); 
  
    return response.send(bloco); 

  }

  /**
   * Render a form to update an existing bloco.
   * GET blocos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response }) {
    const data = request.only(["content"]);
    const bloco = Bloco.find(params.id); 
    if(bloco.user_id ==! auth.user.id) {
      return response.status(401);
    }
    bloco.content = data['content'];
    bloco.save();
    return response.send(bloco); 

  }

  /**
   * Update bloco details.
   * PUT or PATCH blocos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a bloco with id.
   * DELETE blocos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const bloco = await bloco.findOrFail(params.id);
    console.log(auth.user.id)
    
    if(bloco.user_id ==! auth.user.id) {
      return response.status(401);
    }

    return bloco.delete()
  }
}

module.exports = BlocoController
