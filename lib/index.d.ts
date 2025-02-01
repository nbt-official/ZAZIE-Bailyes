const makeWASocket = require('./Socket');

const WAProto = require('../WAProto');
const Utils = require('./Utils');
const Types = require('./Types');
const Store = require('./Store');
const Defaults = require('./Defaults');
const WABinary = require('./WABinary');
const WAM = require('./WAM');
const WAUSync = require('./WAUSync');

const WASocket = makeWASocket;

module.exports = {
  ...WAProto,
  ...Utils,
  ...Types,
  ...Store,
  ...Defaults,
  ...WABinary,
  ...WAM,
  ...WAUSync,
  WASocket,
  makeWASocket,
};