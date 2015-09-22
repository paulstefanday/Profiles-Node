'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _starwarsNamesJson = require('./starwars-names.json');

var _starwarsNamesJson2 = _interopRequireDefault(_starwarsNamesJson);

var getRandomItem = (0, _uniqueRandomArray2['default'])(_starwarsNamesJson2['default']);

module.exports = {
  all: _starwarsNamesJson2['default'],
  random: random
};

// test comment

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
