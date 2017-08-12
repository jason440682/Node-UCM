module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "plugin:jsx-a11y/recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [
        "jsx-a11y"
    ],
    "rules": {
        "comma-dangle": 1,
        "global-require": 0,
        "import/no-dynamic-require": 0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-param-reassign": [2, {
            "props": false
        }],
        "prefer-const": 1,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "jsx-a11y/href-no-hash": 1,
    }
};
