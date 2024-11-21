'use strict';


/**
 * Create a new Root
 * Adiciona/cria uma nova entidade Root.
 *
 * body Root Add nova entidade Root
 * no response value expected for this operation
 **/
exports.createRoot = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * search root
 * Passando um id como parâmetro para recuperar uma entidade root específica.
 *
 * id Integer Passa um Id obrigatório para retorno de uma entidade root.
 * returns root
 **/
exports.searchRoot = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "chart1" : "3m",
  "var" : 0,
  "units" : [ {
    "name" : "R$\\/ston",
    "index" : {
      "$ref" : "#/components/schemas/index"
    },
    "factor" : 60.47898266666667
  }, {
    "name" : "R$\\/ston",
    "index" : {
      "$ref" : "#/components/schemas/index"
    },
    "factor" : 60.47898266666667
  } ],
  "correlates" : 49,
  "representation" : 4,
  "long" : "DATAGRO Daily Live Cattle Index BRL\\/@ SP [D_PEPR_SP_BR]",
  "frequency" : 1,
  "subProduct" : 1261,
  "bolsa" : 2,
  "flex" : 1,
  "name" : "Indicador do Boi SP",
  "cod" : 1,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "decimal" : 2,
  "ult" : 343.09,
  "day" : "2000-01-23T04:56:07.000+00:00",
  "idbolsa" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

