module.exports = {
    'rules': {
        // enforce getter and setter pairs in objects
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "getWithoutSet": {
        //                     "type": "boolean"
        //                 },
        //                 "setWithoutGet": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'accessor-pairs': ['error'],

        // enforce `return` statements in callbacks of array methods
        //
        'array-callback-return': ['off'],

        // enforce the use of variables within the scope they are defined
        //
        'block-scoped-var': ['error'],

        // enforce that class methods utilize `this`
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptMethods": {
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
        'class-methods-use-this': ['error'],

        // enforce a maximum cyclomatic complexity allowed in a program
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "maximum": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "max": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'complexity': ['error'],

        // require `return` statements to either always or never specify values
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "treatUndefinedAsUnspecified": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'consistent-return': ['error'],

        // enforce consistent brace style for all control statements
        //
        // [Has Fixer]
        //
        'curly': ['error'],

        // require `default` cases in `switch` statements
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "commentPattern": {
        //                     "type": "string"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'default-case': ['error'],

        // enforce consistent newlines before and after dots
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "object",
        //                 "property"
        //             ]
        //         }
        //     ]
        //
        'dot-location': ['error', 'property'],

        // enforce dot notation whenever possible
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowKeywords": {
        //                     "type": "boolean"
        //                 },
        //                 "allowPattern": {
        //                     "type": "string"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'dot-notation': ['error'],

        // require the use of `===` and `!==`
        //
        // [Has Fixer]
        //
        'eqeqeq': ['error'],

        // require `for-in` loops to include an `if` statement
        //
        'guard-for-in': ['error'],

        // disallow the use of `alert`, `confirm`, and `prompt`
        //
        'no-alert': ['error'],

        // disallow the use of `arguments.caller` or `arguments.callee`
        //
        'no-caller': ['error'],

        // disallow lexical declarations in case clauses
        //
        'no-case-declarations': ['error'],

        // disallow division operators explicitly at the beginning of regular
        // expressions
        //
        'no-div-regex': ['off'],

        // disallow `else` blocks after `return` statements in `if` statements
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowElseIf": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-else-return': ['error'],

        // disallow empty functions
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
        //                         "enum": [
        //                             "functions",
        //                             "arrowFunctions",
        //                             "generatorFunctions",
        //                             "methods",
        //                             "generatorMethods",
        //                             "getters",
        //                             "setters",
        //                             "constructors"
        //                         ]
        //                     },
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-empty-function': ['error'],

        // disallow empty destructuring patterns
        //
        'no-empty-pattern': ['error'],

        // disallow `null` comparisons without type-checking operators
        //
        'no-eq-null': ['error'],

        // disallow the use of `eval()`
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowIndirect": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-eval': ['error'],

        // disallow extending native types
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     },
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-extend-native': ['error'],

        // disallow unnecessary calls to `.bind()`
        //
        // [Has Fixer]
        //
        'no-extra-bind': ['error'],

        // disallow unnecessary labels
        //
        // [Has Fixer]
        //
        'no-extra-label': ['off'],

        // disallow fallthrough of `case` statements
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "commentPattern": {
        //                     "type": "string"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-fallthrough': ['error'],

        // disallow leading or trailing decimal points in numeric literals
        //
        // [Has Fixer]
        //
        'no-floating-decimal': ['error'],

        // disallow assignments to native objects or read-only global variables
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     },
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-global-assign': ['error'],

        // disallow shorthand type conversions
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "boolean": {
        //                     "type": "boolean"
        //                 },
        //                 "number": {
        //                     "type": "boolean"
        //                 },
        //                 "string": {
        //                     "type": "boolean"
        //                 },
        //                 "allow": {
        //                     "type": "array",
        //                     "items": {
        //                         "enum": [
        //                             "~",
        //                             "!!",
        //                             "+",
        //                             "*"
        //                         ]
        //                     },
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-implicit-coercion': ['error'],

        // disallow variable and `function` declarations in the global scope
        //
        'no-implicit-globals': ['error'],

        // disallow the use of `eval()`-like methods
        //
        'no-implied-eval': ['error'],

        // disallow `this` keywords outside of classes or class-like objects
        //
        'no-invalid-this': ['error'],

        // disallow the use of the `__iterator__` property
        //
        'no-iterator': ['error'],

        // disallow labeled statements
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowLoop": {
        //                     "type": "boolean"
        //                 },
        //                 "allowSwitch": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-labels': ['error'],

        // disallow unnecessary nested blocks
        //
        'no-lone-blocks': ['error'],

        // disallow `function` declarations and expressions inside loop statements
        //
        'no-loop-func': ['error'],

        // disallow magic numbers
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "detectObjects": {
        //                     "type": "boolean"
        //                 },
        //                 "enforceConst": {
        //                     "type": "boolean"
        //                 },
        //                 "ignore": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "number"
        //                     },
        //                     "uniqueItems": true
        //                 },
        //                 "ignoreArrayIndexes": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-magic-numbers': [
            'error',
            {
                'ignore': [
                    -1,
                    0,
                    1,
                    2
                ],
                'ignoreArrayIndexes': true,
                'enforceConst': true
            }
        ],

        // disallow multiple spaces
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptions": {
        //                     "type": "object",
        //                     "patternProperties": {
        //                         "^([A-Z][a-z]*)+$": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 "ignoreEOLComments": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-multi-spaces': ['error'],

        // disallow multiline strings
        //
        'no-multi-str': ['error'],

        // disallow `new` operators with the `Function` object
        //
        'no-new-func': ['error'],

        // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        //
        'no-new-wrappers': ['error'],

        // disallow `new` operators outside of assignments or comparisons
        //
        'no-new': ['error'],

        // disallow octal escape sequences in string literals
        //
        'no-octal-escape': ['error'],

        // disallow octal literals
        //
        'no-octal': ['error'],

        // disallow reassigning `function` parameters
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "props": {
        //                             "enum": [
        //                                 false
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "props": {
        //                             "enum": [
        //                                 true
        //                             ]
        //                         },
        //                         "ignorePropertyModificationsFor": {
        //                             "type": "array",
        //                             "items": {
        //                                 "type": "string"
        //                             },
        //                             "uniqueItems": true
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'no-param-reassign': [
            'error',
            {
                'props': true
            }
        ],

        // disallow the use of the `__proto__` property
        //
        'no-proto': ['error'],

        // disallow variable redeclaration
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "builtinGlobals": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-redeclare': [
            'error',
            {
                'builtinGlobals': true
            }
        ],

        // disallow certain properties on certain objects
        //
        'no-restricted-properties': ['off'],

        // disallow assignment operators in `return` statements
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
        'no-return-assign': ['error', 'always'],

        // disallow unnecessary `return await`
        //
        'no-return-await': ['error'],

        // disallow `javascript:` urls
        //
        'no-script-url': ['error'],

        // disallow assignments where both sides are exactly the same
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "props": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-self-assign': [
            'error',
            {
                'props': true
            }
        ],

        // disallow comparisons where both sides are exactly the same
        //
        'no-self-compare': ['error'],

        // disallow comma operators
        //
        'no-sequences': ['error'],

        // disallow throwing literals as exceptions
        //
        'no-throw-literal': ['error'],

        // disallow unmodified loop conditions
        //
        'no-unmodified-loop-condition': ['error'],

        // disallow unused expressions
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowShortCircuit": {
        //                     "type": "boolean"
        //                 },
        //                 "allowTernary": {
        //                     "type": "boolean"
        //                 },
        //                 "allowTaggedTemplates": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-unused-expressions': ['error'],

        // disallow unused labels
        //
        // [Has Fixer]
        //
        'no-unused-labels': ['off'],

        // disallow unnecessary calls to `.call()` and `.apply()`
        //
        'no-useless-call': ['off'],

        // disallow unnecessary concatenation of literals or template literals
        //
        'no-useless-concat': ['error'],

        // disallow unnecessary escape characters
        //
        'no-useless-escape': ['error'],

        // disallow redundant return statements
        //
        // [Has Fixer]
        //
        'no-useless-return': ['error'],

        // disallow `void` operators
        //
        'no-void': ['error'],

        // disallow specified warning terms in comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "terms": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "location": {
        //                     "enum": [
        //                         "start",
        //                         "anywhere"
        //                     ]
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-warning-comments': ['error'],

        // disallow `with` statements
        //
        'no-with': ['error'],

        // require using Error objects as Promise rejection reasons
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowEmptyReject": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'prefer-promise-reject-errors': ['error'],

        // enforce the consistent use of the radix argument when using `parseInt()`
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "as-needed"
        //             ]
        //         }
        //     ]
        //
        'radix': ['error'],

        // disallow async functions which have no `await` expression
        //
        'require-await': ['error'],

        // require `var` declarations be placed at the top of their containing scope
        //
        'vars-on-top': ['off'],

        // require parentheses around immediate `function` invocations
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "outside",
        //                 "inside",
        //                 "any"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "functionPrototypeMethods": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'wrap-iife': ['error', 'inside'],

        // require or disallow "Yoda" conditions
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "never"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptRange": {
        //                     "type": "boolean"
        //                 },
        //                 "onlyEquality": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'yoda': ['error']
    }
};
