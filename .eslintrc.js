module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': 0,
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'app', 'lib', 'functions'], //name the subproject folders here!!!
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
