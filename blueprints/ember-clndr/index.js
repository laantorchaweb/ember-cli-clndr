module.exports = {
  description: '',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is not specified
  },

  afterInstall: function() {
    var _this = this;

    return this.addBowerPackageToProject('clndr').then(function() {
      return _this.addBowerPackageToProject('moment');
    });
  }
};
