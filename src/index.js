import react from 'babel-preset-react';
import es2015 from 'babel-preset-es2015';
import es2016 from 'babel-preset-es2016';
import es2017 from 'babel-preset-es2017';
import stage0 from 'babel-preset-stage-0';
import decorators from 'babel-plugin-transform-decorators-legacy';
import asyncFunctionSyntax from 'babel-plugin-syntax-async-functions';
import asyncFunctionTransform from 'babel-plugin-transform-async-to-generator';
import flow from 'babel-plugin-transform-flow-strip-types';
import lodash from 'babel-plugin-lodash';
import reactPropTypes from 'babel-plugin-transform-react-remove-prop-types';
import reactSingletons from 'babel-plugin-transform-react-constant-elements';
import reactInline from 'babel-plugin-transform-react-inline-elements';

export default function () {
  return {
    presets: [
      react,
      [es2015, { modules: false }],
      es2016,
      es2017,
      stage0,
    ],
    plugins: [
      decorators,
      asyncFunctionSyntax,
      asyncFunctionTransform,
      flow,
      lodash,
    ],
    env: {
      production: {
        plugins: [
          reactPropTypes,
          reactSingletons,
          reactInline,
        ],
      },
    },
  };
}
