import react from 'babel-preset-react';
import env from 'babel-preset-env';
import stage0 from 'babel-preset-stage-0';
import decorators from 'babel-plugin-transform-decorators-legacy';
import flow from 'babel-plugin-transform-flow-strip-types';
import lodash from 'babel-plugin-lodash';
import reactPropTypes from 'babel-plugin-transform-react-remove-prop-types';
import reactSingletons from 'babel-plugin-transform-react-constant-elements';
import reactInline from 'babel-plugin-transform-react-inline-elements';

export default function () {
  return {
    presets: [
      react,
      env({}, {
        // replace 'babel-polyfill' with individual polyfills matching the target
        useBuiltIns: true,
        // let webpack handle ES modules
        modules: false,
        targets: {
          uglify: true,
          browsers: ['> 0.5%'],
        },
      }),
      stage0,
    ],
    plugins: [
      decorators,
      flow,
      lodash,
    ],
    env: {
      // TODO add react-hmre in dev
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
