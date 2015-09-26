function modulesUsed() {
  var cwd = process.cwd();
  var log = require('debug')('used');

  var join = require('path').join;
  var pkg = require(join(cwd, 'package.json'));
  log('modules used in', pkg.name);

  var read = require('fs').readFileSync;

  function getProdDependenciesList(pkg) {
    return pkg && pkg.dependencies ? Object.keys(pkg.dependencies) : [];
  }

  function dependencyDescription(name) {
    var filename = join(cwd, 'node_modules', name, 'package.json');
    var pkg = JSON.parse(read(filename));
    return {
      name: pkg.name,
      description: pkg.description,
      homepage: pkg.homepage
    };
  }

  function hasHomepage(info) {
    return typeof info.homepage === 'string' && info.homepage;
  }

  function mdWithHomepage(info) {
    return '* [' + info.name + '](' + info.homepage + ') - ' + info.description;
  }

  function mdWithoutHomepage(info) {
    return '* ' + info.name + ' - ' + info.description;
  }

  function toMarkdown(info) {
    if (hasHomepage(info)) {
      return mdWithHomepage(info);
    } else {
      return mdWithoutHomepage(info);
    }
  }

  var prodDependencies = getProdDependenciesList(pkg);
  var described = prodDependencies.map(dependencyDescription);
  var markdown = described.map(toMarkdown).join('\n');
  log(markdown);
  return markdown;
}

module.exports = modulesUsed;

if (!module.parent) {
  console.log('modules used for this project');
  console.log(modulesUsed());
}
