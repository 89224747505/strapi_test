'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post', ({strapi}) =>({

    async exampleService(args) {
        const {id, name, soname} = args;
        console.log('My service was doing', id, name, soname )
    }
}));
