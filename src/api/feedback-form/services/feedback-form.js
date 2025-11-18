'use strict';

/**
 * feedback-form service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feedback-form.feedback-form');
