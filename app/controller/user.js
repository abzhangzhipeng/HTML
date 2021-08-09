'use strict';

const Controller = require('egg').Controller;
const demo = [
        {
            "id":1,
            "username":'昵称',
            "age":"22",
            "sex":"男"
        },
        {
            "id":2,
            "username":'昵称1',
            "age":"22",
            "sex":"男"
        },
        {
            "id":3,
            "username":'昵称2',
            "age":"22",
            "sex":"男"
        }
    ];
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    
    const que_id = ctx.query.id;
    ctx.body = {
        "msg":'ok',
        "data":demo,
        "que_id":que_id
    };
  }
  
  async detail() {
    const { ctx } = this;
    const id = ctx.params.id;
    const data = demo.find(item=>item.id == id);
    ctx.body = {
        "msg":'ok',
        "data":data
    };
  }
}

module.exports = UserController;
