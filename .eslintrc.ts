module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            tsx: true,
        },
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        indent: [0],
        "no-unused-vars": [1],
        "import/prefer-default-export": "off",
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-props-no-spreading": 0,
        // "react-hooks/rules-of-hooks": "error",
        // "react-hooks/exhaustive-deps": "warn",
        "no-script-url": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "linebreak-style": 0,
        "eslint linebreak-style": [0, "error", "windows"],
        "comma-dangle": "off",
        "max-len": "off",
        "no-console": "off",
        "no-plusplus": "off",
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        quotes: 0,
        "react/jsx-pascal-case": 0,
        camelcase: 0,
        "consistent-return": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "object-curly-newline": [0],
        "template-curly-spacing": [0],
        "operator-linebreak": [1],
        "no-irregular-whitespace": [1],
        "no-param-reassign": 0
    }
}
