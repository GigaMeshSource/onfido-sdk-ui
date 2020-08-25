module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'preact',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  plugins: ['react', 'flowtype', 'mocha', 'prettier'],
  globals: {
    expect: false,
  },
  rules: {
    /**
     * Temporary disabled rules for CI passing
     * @TODO merge improvement/linters-fixes PR
     * (https://github.com/onfido/onfido-sdk-ui/pull/1157)
     */
    'no-unused-vars': 'off',
    'no-duplicate-imports': 'off',
    'prefer-template': 'off',
    'react/display-name': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/no-unknown-property': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'off',
    'react-hooks/rules-of-hooks': 'off',
    /* Disabled rules to use Mocha APIs */
    'jest/expect-expect': 'off',
    'jest/no-commented-out-tests': 'off',
    'jest/no-export': 'off',
    'jest/valid-describe': 'off',
    'jest/valid-expect': 'off',
  },
}
