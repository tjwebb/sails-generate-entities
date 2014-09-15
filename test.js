var assert = require('assert');
var _ = require('lodash');

describe('sails-generate-entities', function () {
  var generator;

  before(function () {
    generator = require('./')({
      module: 'sails-auth',
      id: 'auth-api',
      classes: [
        'api/services/passport.js'
      ],
      statics: [
        'api/models/Passport.js'
      ]
    });

  });

  describe('.targets', function () {
    it('should be valid', function () {
      assert(_.isObject(generator.targets));
      //console.log(generator.targets);
    });
    it('model should use static template', function () {
      assert(generator.targets['api/models/Passport.js'].template = 'static.template.js');
    });
    it('service should use class template', function () {
      assert(generator.targets['api/services/passport.js'].template = 'class.template.js');
    });
  });
});
