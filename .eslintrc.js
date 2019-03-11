// https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard',
    'react-app',
  ],
  // env          : {
  //   browser: true,
  //   node   : true,
  //   // jquery : true, // jquery 第一种写法
  // },
  globals: {
    // 'snlog'          : true,
    // 'printJson'      : true,
    // 'printProperties': true,
    // '$': true,
    // 'Mock'           : true,
    // 'moment'         : true,
    // 'chalk'          : true,
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing'            : 'off',
    // allow debugger during development
    'no-debugger'                       : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // edit by stone
    'no-console'                        : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces'                   : 'off',
    'key-spacing'                       : 'off',
    'semi'                              : 'off',
    'comma-dangle'                      : 'off',
    'object-curly-spacing'              : 'off',
    'indent'                            : 'off',
    'block-spacing'                     : 'off',
    'no-multiple-empty-lines'           : 'off',
    'no-trailing-spaces'                : 'off',
    'standard/object-curly-even-spacing': 'off',
    'spaced-comment'                    : 'off',
    'camelcase'                         : 'off',
    'func-call-spacing'                 : 'off',
    'padded-blocks'                     : 'off',
    'import/first'                      : 'off',
    'space-before-function-paren'       : 'off',
    'handle-callback-err'               : 'off',
    'object-property-newline'           : 'off',
    'comma-spacing'                     : 'off',
    'quotes'                            : 'off',
    'no-unneeded-ternary'               : 'off',
    'vue/no-unused-components'          : 'off',
    'no-return-await'                   : 'off',
    'no-unused-vars'                    : 'off',
    'no-undef'                          : 'off',
  },
};
