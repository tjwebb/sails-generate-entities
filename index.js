var path = require('path');
var _ = require('lodash');

module.exports = function (options) {
  return {
    before: function (scope, next) {
      scope.module = options.module;
      scope.id = options.id;
      scope.createdAt = new Date();

      next();
    },

    targets: _.extend(
      _.object(options.statics, _.map(options.statics, function (entity) {
        return { template: 'static.template.ejs' };
      })),
      _.object(options.classes, _.map(options.classes, function (entity) {
        return { template: 'class.template.ejs' };
      })),
      _.object(options.functions, _.map(options.functions, function (entity) {
        return { template: 'function.template.ejs' };
      }))
      /*
      _.object(options.files, _.map(options.files, function (file) {
        return { copy: path.resolve(path.dirname(module.parent.filename), file) }
      }))
      */
    ),

    templatesDirectory: require('path').resolve(__dirname, './templates')
  };
};
