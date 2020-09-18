module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        // ESLINT RULES
        'no-multi-spaces': 'error',
        eqeqeq: 'error',
        'no-return-await': 'error',
        'require-await': 'error',
        yoda: 'error',
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],

        // TYPESCRIPT RULES
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {args: 'none'}],
        '@typescript-eslint/no-use-before-define': ['error', { "ignoreTypeReferences": true }],

        // IMPORT rules
        'import/newline-after-import': ['error', {count: 1}],
        'import/first': 'error',
    },
}
