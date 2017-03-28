'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    presets: [_babelPresetReact2.default, [_babelPresetEs2.default, { modules: false }], _babelPresetEs4.default, _babelPresetEs6.default, _babelPresetStage2.default],
    plugins: [_babelPluginTransformDecoratorsLegacy2.default, _babelPluginSyntaxAsyncFunctions2.default, _babelPluginTransformAsyncToGenerator2.default, _babelPluginTransformFlowStripTypes2.default, _babelPluginLodash2.default],
    env: {
      production: {
        plugins: [_babelPluginTransformReactRemovePropTypes2.default, _babelPluginTransformReactConstantElements2.default, _babelPluginTransformReactInlineElements2.default]
      }
    }
  };
};

var _babelPresetReact = require('babel-preset-react');

var _babelPresetReact2 = _interopRequireDefault(_babelPresetReact);

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPresetEs3 = require('babel-preset-es2016');

var _babelPresetEs4 = _interopRequireDefault(_babelPresetEs3);

var _babelPresetEs5 = require('babel-preset-es2017');

var _babelPresetEs6 = _interopRequireDefault(_babelPresetEs5);

var _babelPresetStage = require('babel-preset-stage-0');

var _babelPresetStage2 = _interopRequireDefault(_babelPresetStage);

var _babelPluginTransformDecoratorsLegacy = require('babel-plugin-transform-decorators-legacy');

var _babelPluginTransformDecoratorsLegacy2 = _interopRequireDefault(_babelPluginTransformDecoratorsLegacy);

var _babelPluginSyntaxAsyncFunctions = require('babel-plugin-syntax-async-functions');

var _babelPluginSyntaxAsyncFunctions2 = _interopRequireDefault(_babelPluginSyntaxAsyncFunctions);

var _babelPluginTransformAsyncToGenerator = require('babel-plugin-transform-async-to-generator');

var _babelPluginTransformAsyncToGenerator2 = _interopRequireDefault(_babelPluginTransformAsyncToGenerator);

var _babelPluginTransformFlowStripTypes = require('babel-plugin-transform-flow-strip-types');

var _babelPluginTransformFlowStripTypes2 = _interopRequireDefault(_babelPluginTransformFlowStripTypes);

var _babelPluginLodash = require('babel-plugin-lodash');

var _babelPluginLodash2 = _interopRequireDefault(_babelPluginLodash);

var _babelPluginTransformReactRemovePropTypes = require('babel-plugin-transform-react-remove-prop-types');

var _babelPluginTransformReactRemovePropTypes2 = _interopRequireDefault(_babelPluginTransformReactRemovePropTypes);

var _babelPluginTransformReactConstantElements = require('babel-plugin-transform-react-constant-elements');

var _babelPluginTransformReactConstantElements2 = _interopRequireDefault(_babelPluginTransformReactConstantElements);

var _babelPluginTransformReactInlineElements = require('babel-plugin-transform-react-inline-elements');

var _babelPluginTransformReactInlineElements2 = _interopRequireDefault(_babelPluginTransformReactInlineElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }