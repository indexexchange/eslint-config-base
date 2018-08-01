module.exports = {
    'rules': {
        // enforce "for" loop update clause moving the counter in the right direction.
        //
        'for-direction': ['error'],

        // enforce `return` statements in getters
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowImplicit": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'getter-return': ['error'],

        // disallow `await` inside of loops
        //
        'no-await-in-loop': ['error'],

        // disallow comparing against -0
        //
        'no-compare-neg-zero': ['error'],

        // disallow assignment operators in conditional expressions
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "except-parens",
        //                 "always"
        //             ]
        //         }
        //     ]
        //
        'no-cond-assign': ['error', 'always'],

        // disallow the use of `console`
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allow": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     },
        //                     "minItems": 1,
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-console': ['error'],

        // disallow constant expressions in conditions
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "checkLoops": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-constant-condition': ['error'],

        // disallow control characters in regular expressions
        //
        'no-control-regex': ['error'],

        // disallow the use of `debugger`
        //
        // [Has Fixer]
        //
        'no-debugger': ['error'],

        // disallow duplicate arguments in `function` definitions
        //
        'no-dupe-args': ['error'],

        // disallow duplicate keys in object literals
        //
        'no-dupe-keys': ['error'],

        // disallow duplicate case labels
        //
        'no-duplicate-case': ['error'],

        // disallow empty character classes in regular expressions
        //
        'no-empty-character-class': ['error'],

        // disallow empty block statements
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowEmptyCatch": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],

        // disallow reassigning exceptions in `catch` clauses
        //
        'no-ex-assign': ['error'],

        // disallow unnecessary boolean casts
        //
        // [Has Fixer]
        //
        'no-extra-boolean-cast': ['error'],

        // disallow unnecessary parentheses
        //
        // [Has Fixer]
        //
        'no-extra-parens': [
            'error',
            'all',
            {
                'nestedBinaryExpressions': false
            }
        ],

        // disallow unnecessary semicolons
        //
        // [Has Fixer]
        //
        'no-extra-semi': ['error'],

        // disallow reassigning `function` declarations
        //
        'no-func-assign': ['error'],

        // disallow variable or `function` declarations in nested blocks
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "functions",
        //                 "both"
        //             ]
        //         }
        //     ]
        //
        'no-inner-declarations': ['error', 'both'],

        // disallow invalid regular expression strings in `RegExp` constructors
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowConstructorFlags": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-invalid-regexp': ['error'],

        // disallow irregular whitespace outside of strings and comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "skipComments": {
        //                     "type": "boolean"
        //                 },
        //                 "skipStrings": {
        //                     "type": "boolean"
        //                 },
        //                 "skipTemplates": {
        //                     "type": "boolean"
        //                 },
        //                 "skipRegExps": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-irregular-whitespace': ['error'],

        // disallow calling global object properties as functions
        //
        'no-obj-calls': ['error'],

        // disallow calling some `Object.prototype` methods directly on objects
        //
        'no-prototype-builtins': ['off'],

        // disallow multiple spaces in regular expressions
        //
        // [Has Fixer]
        //
        'no-regex-spaces': ['error'],

        // disallow sparse arrays
        //
        'no-sparse-arrays': ['error'],

        // disallow template literal placeholder syntax in regular strings
        //
        'no-template-curly-in-string': ['error'],

        // disallow confusing multiline expressions
        //
        'no-unexpected-multiline': ['error'],

        // disallow unreachable code after `return`, `throw`, `continue`, and `break`
        // statements
        //
        'no-unreachable': ['error'],

        // disallow control flow statements in `finally` blocks
        //
        'no-unsafe-finally': ['error'],

        // disallow negating the left operand of relational operators
        //
        // [Has Fixer]
        //
        'no-unsafe-negation': ['error'],

        // require calls to `isNaN()` when checking for `NaN`
        //
        'use-isnan': ['error'],

        // enforce valid JSDoc comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "prefer": {
        //                     "type": "object",
        //                     "additionalProperties": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "preferType": {
        //                     "type": "object",
        //                     "additionalProperties": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "requireReturn": {
        //                     "type": "boolean"
        //                 },
        //                 "requireParamDescription": {
        //                     "type": "boolean"
        //                 },
        //                 "requireReturnDescription": {
        //                     "type": "boolean"
        //                 },
        //                 "matchDescription": {
        //                     "type": "string"
        //                 },
        //                 "requireReturnType": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'valid-jsdoc': [
            'error',
            {
                'prefer': {
                    'arg': 'param',
                    'argument': 'param',
                    'augments': 'extends',
                    'constant': 'const',
                    'constructor': 'class',
                    'defaultvalue': 'default',
                    'description': 'desc',
                    'exception': 'throws',
                    'fileoverview': 'file',
                    'fires': 'emits',
                    'function': 'func',
                    'host': 'external',
                    'member': 'var',
                    'method': 'func',
                    'overview': 'file',
                    'property': 'prop',
                    'returns': 'return',
                    'virtual': 'abstract',
                    'yields': 'yield'
                },
                'preferType': {
                    'Boolean': 'boolean',
                    'Null': 'null',
                    'Number': 'number',
                    'Object': 'object',
                    'String': 'string',
                    'Undefined': 'undefined'
                },
                'requireReturn': false,
                'requireReturnType': true,
                'matchDescription': '.+',
                'requireParamDescription': true,
                'requireReturnDescription': true
            }
        ],

        // enforce comparing `typeof` expressions against valid strings
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "requireStringLiterals": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'valid-typeof': ['error']
    }
};
