'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) => ({
    async exampleAction(ctx) {
       strapi.service('api::post.post').exampleService({id:1, name:'ivan', soname:'zyryanov'})
       return {ctx};
    },

    }));