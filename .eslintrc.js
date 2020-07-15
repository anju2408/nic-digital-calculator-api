module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    complexity: 1,
  },
  overrides: [
    {
      files: ['routes/**/*.js'],

      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
};
