'use strict';

const mimeTypes = require('mime-types');
const assert = require('assert');
const mm = require('mm');
const getType = require('../');

describe('cache-content-type', () => {
  it('should work with cache', () => {
    assert(getType('html') === 'text/html; charset=utf-8');
    mm.syncError(mimeTypes, 'contentType', 'mock error');
    assert(getType('html') === 'text/html; charset=utf-8');
  });
});
