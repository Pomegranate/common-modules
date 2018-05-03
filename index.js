/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project common-modules
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 * Pomegranate common-modules
 * @module index
 */

module.exports = {
  Framework: {
    name: '@pomegranate/framework',
    module: require('@pomegranate/framework'),
    version: require('@pomegranate/framework/package').version
  },
  PluginFacade: {
    name: '@pomegranate/plugin-facade',
    module: require('@pomegranate/plugin-facade'),
    version: require('@pomegranate/plugin-facade/package').version
  },
  PluginFinder: {
    name: '@pomegranate/plugin-finder',
    module: require('@pomegranate/plugin-finder'),
    version: require('@pomegranate/plugin-finder/package').version
  },
  PluginIterator: {
    name: '@pomegranate/plugin-iterator',
    module: require('@pomegranate/plugin-iterator'),
    version: require('@pomegranate/plugin-iterator/package').version
  },
  FrameworkLogger: {
    name: '@pomegranate/framework-logger',
    module: require('@pomegranate/framework-logger'),
    version: require('@pomegranate/framework-logger/package').version
  },
  TopoSorter: {
    name: '@pomegranate/toposorter',
    module: require('@pomegranate/toposorter'),
    version: require('@pomegranate/toposorter/package').version
  },
  Utils: {
    name: '@pomegranate/framework-utils',
    module: require('@pomegranate/framework-utils'),
    version: require('@pomegranate/framework-utils/package').version
  }
}