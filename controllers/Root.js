'use strict';

var utils = require('../utils/writer.js');
var Root = require('../service/RootService');

module.exports.createRoot = function createRoot (req, res, next, body) {
  Root.createRoot(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchRoot = function searchRoot (req, res, next, id) {
  Root.searchRoot(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
