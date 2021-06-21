module.exports = {
    'extends': [
        'plugin:vue/vue3-recommended', // vue template formatter
        'standard'
    ],
    'parserOptions': {
        parser: '@typescript-eslint/parser'
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': ['error', 'always'], // 括号之前有空格
        'quote-props': 'off', // object的key使用引号
        'quotes': ['error', 'single'], // 使用单引号
        'indent': ['error', 4], // js tab size (包含 .vue 的 script)
        'vue/html-indent': ['error', 4], // template 格式化 tab size
        'vue/script-indent': ['error', 4], // script 格式化 tab size
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }]
    }
}
