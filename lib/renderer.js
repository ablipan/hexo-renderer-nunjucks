'use strict';

var nunjucks = require('nunjucks');
var path = require('path');

function nunjucksCompile(data, config) {
    var templateDir = path.dirname(data.path);
    var env = nunjucks.configure(templateDir, {
        autoescape: false
    });
    return nunjucks.compile(data.text, env, data.path);
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
