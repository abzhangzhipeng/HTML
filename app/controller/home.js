'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, 微信';
  }
  async list() {
    const { ctx } = this;
    ctx.body = {
    	"msg":"ok",
	    "data":[1,2,3,4],
    };
  }
}

module.exports = HomeController;
