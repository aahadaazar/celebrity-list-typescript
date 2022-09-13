module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: './tsconfig.json', // The error starts here
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "no-console": 2, // Remember, this means error!
    "react/jsx-filename-extension": 0,
    'import/extensions':0,
    'import/no-extraneous-dependencies':0,
  },
};