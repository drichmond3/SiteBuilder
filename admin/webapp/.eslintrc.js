// eslint-disable-next-line
module.exports = {
  'env': {
    'browser': true,
    'es2020': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'simple-import-sort'
  ],
  'rules': {
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'no-multi-spaces': ['warn'],
    'no-console': ['warn'],
    'no-extra-semi': ['warn'],
    'no-irregular-whitespace': ['warn'],
    'no-unreachable': ['warn'],
    'default-case': ['warn'],
    'eqeqeq': ['warn'],
    'no-fallthrough': ['warn'],
    'no-unmodified-loop-condition': ['warn'],
    'camelcase': 'warn',
    'max-len': ['warn', { 'code': 100 }],
    'no-multiple-empty-lines': ['warn', { 'max': 1 }],
    'no-trailing-spaces': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'space-before-blocks': ['warn', { 'functions': 'always' }],
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    'keyword-spacing': ['warn', { 'before': true, 'after': true }],
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'simple-import-sort/sort': ['warn'],
    'sort-imports': 'off',
    'import/order': 'off',
    'react/sort-prop-types': 'warn',
  }
};
