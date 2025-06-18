/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: ['next', 'next/core-web-vitals'],
    rules: {
        'react/no-unescaped-entities': 'off',
    },
};
