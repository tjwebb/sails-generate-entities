var _ = require('lodash');

module.exports = function (options) {
  return {
    before: function (scope, next) {
      scope.module = options.module;
      scope.id = options.id;
      scope.createdAt = new Date();

      next();
    },

    targets: _.object(options.entities, _.map(options.entities, function (entity) {
      return { template: 'entity.template.js' };
    })),

    templatesDirectory: require('path').resolve(__dirname, './templates')
  };
};
