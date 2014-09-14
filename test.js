var assert = require('assert');
var _ = require('lodash');

describe('sails-generate-entities', function () {
  var generator;

  before(function () {
    generator = require('./')({
      module: 'sails-auth',
      id: 'auth-api',
      entities: [
        'api/models/Passport.js'
      ]
    });

  });

  describe('.targets', function () {
    it('should be valid', function () {
      assert(_.isObject(generator.targets));
    });
    it('should have correct template value', function () {
      assert(generator.targets['api/models/Passport.js'].template = 'entity.template.js');
    });
  });
});
