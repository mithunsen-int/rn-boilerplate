module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // For TypeScript support
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-hooks',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', // Prettier recommended rules
    '@react-native',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
  ],
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    // General Rules
    'prettier/prettier': 'error', // Ensures Prettier rules are followed
    'no-unused-vars': 'warn', // Warns about unused variables
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Discourage console logs
    'no-prototype-builtins': 'off', // Allow prototype builtins
    'no-useless-catch': 'off', // Warn about unnecessary catch blocks

    // React Rules
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not required in React 17+
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // Allow JSX in .tsx files

    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error', // Checks rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // React Native Rules
    'react-native/no-inline-styles': 'warn', // Discourage inline styles
    'react-native/no-unused-styles': 'warn', // Warn about unused styles
    'react-native/split-platform-components': 'warn', // Use platform-specific files properly
    'react-native/no-single-element-style-arrays': 'warn', // Prevent single-element arrays in styles

    // TypeScript Rules
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Allow unused variables starting with _
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage `any` usage
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional for React projects
    '@typescript-eslint/no-unused-expressions': 'off', // Warn about unused expressions
    '@typescript-eslint/func-call-spacing': 'off', // Ensure spacing between functions and arguments
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
