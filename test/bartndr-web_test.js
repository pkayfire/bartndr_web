/*global describe,it*/
'use strict';
var assert = require('assert'),
  bartndrWeb = require('../lib/bartndr-web.js');

describe('bartndr-web node module.', function() {
  it('must be awesome', function() {
    assert( bartndrWeb .awesome(), 'awesome');
  });
});
