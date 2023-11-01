'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) => ({
    
   async exampleAction(ctx, next) {
       const posts = await strapi.entityService.findMany('api::post.post', {populate: "*"});
       return posts;
   },

}));