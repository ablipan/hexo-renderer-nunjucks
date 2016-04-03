'use strict';

var nunjucks = require('nunjucks');

function nunjucksCompile(data) {
    return nunjucks.compile(data.text);
}

function nunjucksRenderer(data, locals) {
  return nunjucksCompile(data).render(locals);
}

nunjucksRenderer.compile = function(data) {
    return function(locals) {
        return nunjucksCompile(data).render(locals);
    }
};

module.exports = nunjucksRenderer;
