module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 2021, // Atualizado para a versão ECMAScript 2021
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Detectar a versão do React automaticamente
    },
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // Removendo regras de propTypes para projetos modernos
    'react/jsx-uses-react': 'off', // Desativando regras obsoletas
    'react/react-in-jsx-scope': 'off', // Desativando regras obsoletas
  },
};
