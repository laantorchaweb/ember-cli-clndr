/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-clndr',

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/moment/min/moment.min.js');
    this.app.import(app.bowerDirectory + '/underscore/underscore-min.js');
    this.app.import(app.bowerDirectory + '/clndr/clndr.min.js');
    this.app.import(app.bowerDirectory + '/ember/ember-template-compiler.js');
    this.app.import('vendor/style.css');
  }
};
