var log = require('debug')('used');
var pkg = require('./package.json');
var join = require('path').join;
var read = require('fs').readFileSync;

function getProdDependenciesList(pkg) {
  return pkg && pkg.dependencies ? Object.keys(pkg.dependencies) : [];
}

function dependencyDescription(name) {
  var filename = join('.', 'node_modules', name, 'package.json');
  var pkg = JSON.parse(read(filename));
  return {
    name: pkg.name,
    description: pkg.description
  };
}

var prodDependencies = getProdDependenciesList(pkg);
var described = prodDependencies.map(dependencyDescription);
log(described);

