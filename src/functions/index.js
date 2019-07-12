'use strict';

const queryString = require('query-string');
const drupalAttribute = require('drupal-attribute');

module.exports = function (fractal) {

    return {
        path(str, obj) {
            return '#' + str + queryString.stringify(obj);
        },
        url(str, obj) {
            return 'url://' + str + queryString.stringify(obj);
        },
        block_view(path) {
            return this.context[path] || 'block_view returned undefined from key ' + path;
        },
        active_theme_path() {
            return '';
        },
        create_attribute(attributes) {
            return new drupalAttribute(attributes);
        },
        attach_library(library) {
            if (typeof library === 'string' || library instanceof String) {
                const yml = 'libraries/' + library.split('/')[0];
                const lib = library.split('/')[1];
                const config = yaml.safeLoad(fs.readFileSync(yml.concat('.libraries.yml'), 'utf8'));
                return '<script src="' + Object.keys(config[lib].js)[0] + '"></script>';
            } else {
                console.error('Argument must be a string.');
            }
        }
    }

};
