module.exports = {
    'rules': {
        // enforce linebreaks after opening and before closing array brackets
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never",
        //                         "consistent"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "multiline": {
        //                             "type": "boolean"
        //                         },
        //                         "minItems": {
        //                             "type": [
        //                                 "integer",
        //                                 "null"
        //                             ],
        //                             "minimum": 0
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'array-bracket-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 3
            }
        ],

        // enforce consistent spacing inside array brackets
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
        //                 "singleValue": {
        //                     "type": "boolean"
        //                 },
        //                 "objectsInArrays": {
        //                     "type": "boolean"
        //                 },
        //                 "arraysInArrays": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'array-bracket-spacing': ['error'],

        // enforce line breaks after each array element
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "multiline": {
        //                             "type": "boolean"
        //                         },
        //                         "minItems": {
        //                             "type": [
        //                                 "integer",
        //                                 "null"
        //                             ],
        //                             "minimum": 0
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'array-element-newline': [
            'error',
            {
                'multiline': true,
                'minItems': 3
            }
        ],

        // disallow or enforce spaces inside of blocks after opening block and before
        // closing block
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
        //         }
        //     ]
        //
        'block-spacing': ['error'],

        // enforce consistent brace style for blocks
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "1tbs",
        //                 "stroustrup",
        //                 "allman"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowSingleLine": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'brace-style': ['error'],

        // enforce camelcase naming convention
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "properties": {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'camelcase': ['error'],

        // enforce or disallow capitalization of the first letter of a comment
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
        //             "oneOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "ignorePattern": {
        //                             "type": "string"
        //                         },
        //                         "ignoreInlineComments": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreConsecutiveComments": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "line": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "ignorePattern": {
        //                                     "type": "string"
        //                                 },
        //                                 "ignoreInlineComments": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "ignoreConsecutiveComments": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "block": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "ignorePattern": {
        //                                     "type": "string"
        //                                 },
        //                                 "ignoreInlineComments": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "ignoreConsecutiveComments": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'capitalized-comments': ['error', 'always'],

        // require or disallow trailing commas
        //
        // [Has Fixer]
        //
        'comma-dangle': ['error'],

        // enforce consistent spacing before and after commas
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "before": {
        //                     "type": "boolean"
        //                 },
        //                 "after": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'comma-spacing': ['error'],

        // enforce consistent comma style
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "first",
        //                 "last"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "exceptions": {
        //                     "type": "object",
        //                     "additionalProperties": {
        //                         "type": "boolean"
        //                     }
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'comma-style': ['error'],

        // enforce consistent spacing inside computed property brackets
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
        //         }
        //     ]
        //
        'computed-property-spacing': ['error'],

        // enforce consistent naming when capturing the current execution context
        //
        'consistent-this': ['error'],

        // require or disallow newline at the end of files
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "never",
        //                 "unix",
        //                 "windows"
        //             ]
        //         }
        //     ]
        //
        'eol-last': ['error'],

        // require or disallow spacing between function identifiers and their
        // invocations
        //
        // [Has Fixer]
        //
        'func-call-spacing': ['error'],

        // require function names to match the name of the variable or property to which
        // they are assigned
        //
        'func-name-matching': ['off'],

        // require or disallow named `function` expressions
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "as-needed",
        //                 "never"
        //             ]
        //         }
        //     ]
        //
        'func-names': ['error', 'never'],

        // enforce the consistent use of either `function` declarations or expressions
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "declaration",
        //                 "expression"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowArrowFunctions": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'func-style': [
            'error',
            'declaration',
            {
                'allowArrowFunctions': true
            }
        ],

        // enforce consistent line breaks inside function parentheses
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never",
        //                         "consistent",
        //                         "multiline"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "minItems": {
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
        'function-paren-newline': ['error', 'consistent'],

        // disallow specified identifiers
        //
        'id-blacklist': ['off'],

        // enforce minimum and maximum identifier lengths
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "min": {
        //                     "type": "number"
        //                 },
        //                 "max": {
        //                     "type": "number"
        //                 },
        //                 "exceptions": {
        //                     "type": "array",
        //                     "uniqueItems": true,
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "properties": {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'id-length': ['off'],

        // require identifiers to match a specified regular expression
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "string"
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "properties": {
        //                     "type": "boolean"
        //                 }
        //             }
        //         }
        //     ]
        //
        'id-match': ['off'],

        // enforce the location of arrow function bodies
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "beside",
        //                 "below"
        //             ]
        //         }
        //     ]
        //
        'implicit-arrow-linebreak': ['error'],

        // enforce consistent indentation
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "tab"
        //                     ]
        //                 },
        //                 {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 }
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "SwitchCase": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "VariableDeclarator": {
        //                     "oneOf": [
        //                         {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         {
        //                             "type": "object",
        //                             "properties": {
        //                                 "var": {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 "let": {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 "const": {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         }
        //                     ]
        //                 },
        //                 "outerIIFEBody": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "MemberExpression": {
        //                     "oneOf": [
        //                         {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         {
        //                             "enum": [
        //                                 "off"
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 "FunctionDeclaration": {
        //                     "type": "object",
        //                     "properties": {
        //                         "parameters": {
        //                             "oneOf": [
        //                                 {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 {
        //                                     "enum": [
        //                                         "first",
        //                                         "off"
        //                                     ]
        //                                 }
        //                             ]
        //                         },
        //                         "body": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 "FunctionExpression": {
        //                     "type": "object",
        //                     "properties": {
        //                         "parameters": {
        //                             "oneOf": [
        //                                 {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 {
        //                                     "enum": [
        //                                         "first",
        //                                         "off"
        //                                     ]
        //                                 }
        //                             ]
        //                         },
        //                         "body": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 "CallExpression": {
        //                     "type": "object",
        //                     "properties": {
        //                         "arguments": {
        //                             "oneOf": [
        //                                 {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 {
        //                                     "enum": [
        //                                         "first",
        //                                         "off"
        //                                     ]
        //                                 }
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 "ArrayExpression": {
        //                     "oneOf": [
        //                         {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         {
        //                             "enum": [
        //                                 "first",
        //                                 "off"
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 "ObjectExpression": {
        //                     "oneOf": [
        //                         {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         {
        //                             "enum": [
        //                                 "first",
        //                                 "off"
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 "ImportDeclaration": {
        //                     "oneOf": [
        //                         {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         {
        //                             "enum": [
        //                                 "first",
        //                                 "off"
        //                             ]
        //                         }
        //                     ]
        //                 },
        //                 "flatTernaryExpressions": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoredNodes": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string",
        //                         "not": {
        //                             "pattern": ":exit$"
        //                         }
        //                     }
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],

        // enforce the consistent use of either double or single quotes in JSX
        // attributes
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "prefer-single",
        //                 "prefer-double"
        //             ]
        //         }
        //     ]
        //
        'jsx-quotes': ['off'],

        // enforce consistent spacing between keys and values in object literal
        // properties
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "anyOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "align": {
        //                             "anyOf": [
        //                                 {
        //                                     "enum": [
        //                                         "colon",
        //                                         "value"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "mode": {
        //                                             "enum": [
        //                                                 "strict",
        //                                                 "minimum"
        //                                             ]
        //                                         },
        //                                         "on": {
        //                                             "enum": [
        //                                                 "colon",
        //                                                 "value"
        //                                             ]
        //                                         },
        //                                         "beforeColon": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "afterColon": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false
        //                                 }
        //                             ]
        //                         },
        //                         "mode": {
        //                             "enum": [
        //                                 "strict",
        //                                 "minimum"
        //                             ]
        //                         },
        //                         "beforeColon": {
        //                             "type": "boolean"
        //                         },
        //                         "afterColon": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "singleLine": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "mode": {
        //                                     "enum": [
        //                                         "strict",
        //                                         "minimum"
        //                                     ]
        //                                 },
        //                                 "beforeColon": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "afterColon": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "multiLine": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "align": {
        //                                     "anyOf": [
        //                                         {
        //                                             "enum": [
        //                                                 "colon",
        //                                                 "value"
        //                                             ]
        //                                         },
        //                                         {
        //                                             "type": "object",
        //                                             "properties": {
        //                                                 "mode": {
        //                                                     "enum": [
        //                                                         "strict",
        //                                                         "minimum"
        //                                                     ]
        //                                                 },
        //                                                 "on": {
        //                                                     "enum": [
        //                                                         "colon",
        //                                                         "value"
        //                                                     ]
        //                                                 },
        //                                                 "beforeColon": {
        //                                                     "type": "boolean"
        //                                                 },
        //                                                 "afterColon": {
        //                                                     "type": "boolean"
        //                                                 }
        //                                             },
        //                                             "additionalProperties": false
        //                                         }
        //                                     ]
        //                                 },
        //                                 "mode": {
        //                                     "enum": [
        //                                         "strict",
        //                                         "minimum"
        //                                     ]
        //                                 },
        //                                 "beforeColon": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "afterColon": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "singleLine": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "mode": {
        //                                     "enum": [
        //                                         "strict",
        //                                         "minimum"
        //                                     ]
        //                                 },
        //                                 "beforeColon": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "afterColon": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "multiLine": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "mode": {
        //                                     "enum": [
        //                                         "strict",
        //                                         "minimum"
        //                                     ]
        //                                 },
        //                                 "beforeColon": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "afterColon": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "align": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "mode": {
        //                                     "enum": [
        //                                         "strict",
        //                                         "minimum"
        //                                     ]
        //                                 },
        //                                 "on": {
        //                                     "enum": [
        //                                         "colon",
        //                                         "value"
        //                                     ]
        //                                 },
        //                                 "beforeColon": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "afterColon": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'key-spacing': ['error'],

        // enforce consistent spacing before and after keywords
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "before": {
        //                     "type": "boolean"
        //                 },
        //                 "after": {
        //                     "type": "boolean"
        //                 },
        //                 "overrides": {
        //                     "type": "object",
        //                     "properties": {
        //                         "abstract": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "as": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "async": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "await": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "boolean": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "break": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "byte": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "case": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "catch": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "char": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "class": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "const": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "continue": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "debugger": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "default": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "delete": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "do": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "double": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "else": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "enum": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "export": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "extends": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "false": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "final": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "finally": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "float": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "for": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "from": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "function": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "get": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "goto": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "if": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "implements": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "import": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "in": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "instanceof": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "int": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "interface": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "let": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "long": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "native": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "new": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "null": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "of": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "package": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "private": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "protected": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "public": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "return": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "set": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "short": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "static": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "super": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "switch": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "synchronized": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "this": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "throw": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "throws": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "transient": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "true": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "try": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "typeof": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "var": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "void": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "volatile": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "while": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "with": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "yield": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "before": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "after": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'keyword-spacing': ['error'],

        // enforce position of line comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "above",
        //                         "beside"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "position": {
        //                             "enum": [
        //                                 "above",
        //                                 "beside"
        //                             ]
        //                         },
        //                         "ignorePattern": {
        //                             "type": "string"
        //                         },
        //                         "applyDefaultPatterns": {
        //                             "type": "boolean"
        //                         },
        //                         "applyDefaultIgnorePatterns": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'line-comment-position': ['error'],

        // enforce consistent linebreak style
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "unix",
        //                 "windows"
        //             ]
        //         }
        //     ]
        //
        'linebreak-style': ['error'],

        // require empty lines around comments
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "beforeBlockComment": {
        //                     "type": "boolean"
        //                 },
        //                 "afterBlockComment": {
        //                     "type": "boolean"
        //                 },
        //                 "beforeLineComment": {
        //                     "type": "boolean"
        //                 },
        //                 "afterLineComment": {
        //                     "type": "boolean"
        //                 },
        //                 "allowBlockStart": {
        //                     "type": "boolean"
        //                 },
        //                 "allowBlockEnd": {
        //                     "type": "boolean"
        //                 },
        //                 "allowClassStart": {
        //                     "type": "boolean"
        //                 },
        //                 "allowClassEnd": {
        //                     "type": "boolean"
        //                 },
        //                 "allowObjectStart": {
        //                     "type": "boolean"
        //                 },
        //                 "allowObjectEnd": {
        //                     "type": "boolean"
        //                 },
        //                 "allowArrayStart": {
        //                     "type": "boolean"
        //                 },
        //                 "allowArrayEnd": {
        //                     "type": "boolean"
        //                 },
        //                 "ignorePattern": {
        //                     "type": "string"
        //                 },
        //                 "applyDefaultIgnorePatterns": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'lines-around-comment': [
            'error',
            {
                'beforeBlockComment': true,
                'afterBlockComment': false,
                'beforeLineComment': true,
                'afterLineComment': false,
                'allowBlockStart': true,
                'allowBlockEnd': false,
                'allowObjectStart': true,
                'allowObjectEnd': false,
                'allowArrayStart': true,
                'allowArrayEnd': false,
                'allowClassStart': true,
                'allowClassEnd': false,
                'ignorePattern': '\\?'
            }
        ],

        // require or disallow an empty line between class members
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
        //                 "exceptAfterSingleLine": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'lines-between-class-members': ['error'],

        // enforce a maximum depth that blocks can be nested
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
        'max-depth': [
            'error',
            {
                'max': 5
            }
        ],

        // enforce a maximum line length
        //
        // Schema:
        //
        //     [
        //         {
        //             "anyOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "code": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "comments": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "tabWidth": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "ignorePattern": {
        //                             "type": "string"
        //                         },
        //                         "ignoreComments": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreStrings": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreUrls": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreTemplateLiterals": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreRegExpLiterals": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreTrailingComments": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 }
        //             ]
        //         },
        //         {
        //             "anyOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "code": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "comments": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "tabWidth": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "ignorePattern": {
        //                             "type": "string"
        //                         },
        //                         "ignoreComments": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreStrings": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreUrls": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreTemplateLiterals": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreRegExpLiterals": {
        //                             "type": "boolean"
        //                         },
        //                         "ignoreTrailingComments": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 }
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "code": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "comments": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "tabWidth": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "ignorePattern": {
        //                     "type": "string"
        //                 },
        //                 "ignoreComments": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreStrings": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreUrls": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreTemplateLiterals": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreRegExpLiterals": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreTrailingComments": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'max-len': [
            'error',
            {
                'code': 100,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }
        ],

        // enforce a maximum number of lines per file
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
        //                         "max": {
        //                             "type": "integer",
        //                             "minimum": 0
        //                         },
        //                         "skipComments": {
        //                             "type": "boolean"
        //                         },
        //                         "skipBlankLines": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'max-lines': ['off'],

        // enforce a maximum depth that callbacks can be nested
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
        'max-nested-callbacks': [
            'error',
            {
                'max': 3
            }
        ],

        // enforce a maximum number of parameters in function definitions
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
        'max-params': [
            'error',
            {
                'max': 5
            }
        ],

        // enforce a maximum number of statements allowed per line
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "max": {
        //                     "type": "integer",
        //                     "minimum": 1
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'max-statements-per-line': ['error'],

        // enforce a maximum number of statements allowed in function blocks
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
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "ignoreTopLevelFunctions": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'max-statements': ['off'],

        // enforce a particular style for multiline comments
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "starred-block",
        //                 "separate-lines",
        //                 "bare-block"
        //             ]
        //         }
        //     ]
        //
        'multiline-comment-style': ['error', 'starred-block'],

        // enforce newlines between operands of ternary expressions
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "always-multiline",
        //                 "never"
        //             ]
        //         }
        //     ]
        //
        'multiline-ternary': ['error', 'never'],

        // require constructor names to begin with a capital letter
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "newIsCap": {
        //                     "type": "boolean"
        //                 },
        //                 "capIsNew": {
        //                     "type": "boolean"
        //                 },
        //                 "newIsCapExceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "newIsCapExceptionPattern": {
        //                     "type": "string"
        //                 },
        //                 "capIsNewExceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "capIsNewExceptionPattern": {
        //                     "type": "string"
        //                 },
        //                 "properties": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'new-cap': ['error'],

        // require parentheses when invoking a constructor with no arguments
        //
        // [Has Fixer]
        //
        'new-parens': ['error'],

        // require a newline after each call in a method chain
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "ignoreChainWithDepth": {
        //                     "type": "integer",
        //                     "minimum": 1,
        //                     "maximum": 10
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 1
            }
        ],

        // disallow `Array` constructors
        //
        'no-array-constructor': ['error'],

        // disallow bitwise operators
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
        //                             "^",
        //                             "|",
        //                             "&",
        //                             "<<",
        //                             ">>",
        //                             ">>>",
        //                             "^=",
        //                             "|=",
        //                             "&=",
        //                             "<<=",
        //                             ">>=",
        //                             ">>>=",
        //                             "~"
        //                         ]
        //                     },
        //                     "uniqueItems": true
        //                 },
        //                 "int32Hint": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-bitwise': ['error'],

        // disallow `continue` statements
        //
        'no-continue': ['off'],

        // disallow inline comments after code
        //
        'no-inline-comments': ['error'],

        // disallow `if` statements as the only statement in `else` blocks
        //
        // [Has Fixer]
        //
        'no-lonely-if': ['off'],

        // disallow mixed binary operators
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "groups": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "array",
        //                         "items": {
        //                             "enum": [
        //                                 "+",
        //                                 "-",
        //                                 "*",
        //                                 "/",
        //                                 "%",
        //                                 "**",
        //                                 "&",
        //                                 "|",
        //                                 "^",
        //                                 "~",
        //                                 "<<",
        //                                 ">>",
        //                                 ">>>",
        //                                 "==",
        //                                 "!=",
        //                                 "===",
        //                                 "!==",
        //                                 ">",
        //                                 ">=",
        //                                 "<",
        //                                 "<=",
        //                                 "&&",
        //                                 "||",
        //                                 "in",
        //                                 "instanceof"
        //                             ]
        //                         },
        //                         "minItems": 2,
        //                         "uniqueItems": true
        //                     },
        //                     "uniqueItems": true
        //                 },
        //                 "allowSamePrecedence": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-mixed-operators': ['error'],

        // disallow mixed spaces and tabs for indentation
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "smart-tabs",
        //                 true,
        //                 false
        //             ]
        //         }
        //     ]
        //
        'no-mixed-spaces-and-tabs': ['error'],

        // disallow use of chained assignment expressions
        //
        'no-multi-assign': ['error'],

        // disallow multiple empty lines
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "max": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "maxEOF": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 },
        //                 "maxBOF": {
        //                     "type": "integer",
        //                     "minimum": 0
        //                 }
        //             },
        //             "required": [
        //                 "max"
        //             ],
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 0
            }
        ],

        // disallow negated conditions
        //
        'no-negated-condition': ['off'],

        // disallow nested ternary expressions
        //
        'no-nested-ternary': ['error'],

        // disallow `Object` constructors
        //
        'no-new-object': ['error'],

        // disallow the unary operators `++` and `--`
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowForLoopAfterthoughts": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-plusplus': ['off'],

        // disallow specified syntax
        //
        'no-restricted-syntax': ['off'],

        // disallow all tabs
        //
        'no-tabs': ['error'],

        // disallow ternary operators
        //
        'no-ternary': ['off'],

        // disallow trailing whitespace at the end of lines
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "skipBlankLines": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreComments": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-trailing-spaces': ['error'],

        // disallow dangling underscores in identifiers
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
        //                     }
        //                 },
        //                 "allowAfterThis": {
        //                     "type": "boolean"
        //                 },
        //                 "allowAfterSuper": {
        //                     "type": "boolean"
        //                 },
        //                 "enforceInMethodNames": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-underscore-dangle': ['off'],

        // disallow ternary operators when simpler alternatives exist
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "defaultAssignment": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'no-unneeded-ternary': ['error'],

        // disallow whitespace before properties
        //
        // [Has Fixer]
        //
        'no-whitespace-before-property': ['error'],

        // enforce the location of single-line statements
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "beside",
        //                 "below",
        //                 "any"
        //             ]
        //         },
        //         {
        //             "properties": {
        //                 "overrides": {
        //                     "properties": {
        //                         "if": {
        //                             "enum": [
        //                                 "beside",
        //                                 "below",
        //                                 "any"
        //                             ]
        //                         },
        //                         "else": {
        //                             "enum": [
        //                                 "beside",
        //                                 "below",
        //                                 "any"
        //                             ]
        //                         },
        //                         "while": {
        //                             "enum": [
        //                                 "beside",
        //                                 "below",
        //                                 "any"
        //                             ]
        //                         },
        //                         "do": {
        //                             "enum": [
        //                                 "beside",
        //                                 "below",
        //                                 "any"
        //                             ]
        //                         },
        //                         "for": {
        //                             "enum": [
        //                                 "beside",
        //                                 "below",
        //                                 "any"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'nonblock-statement-body-position': ['off'],

        // enforce consistent line breaks inside braces
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "oneOf": [
        //                         {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         {
        //                             "type": "object",
        //                             "properties": {
        //                                 "multiline": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "minProperties": {
        //                                     "type": "integer",
        //                                     "minimum": 0
        //                                 },
        //                                 "consistent": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false,
        //                             "minProperties": 1
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "ObjectExpression": {
        //                             "oneOf": [
        //                                 {
        //                                     "enum": [
        //                                         "always",
        //                                         "never"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "multiline": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "minProperties": {
        //                                             "type": "integer",
        //                                             "minimum": 0
        //                                         },
        //                                         "consistent": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false,
        //                                     "minProperties": 1
        //                                 }
        //                             ]
        //                         },
        //                         "ObjectPattern": {
        //                             "oneOf": [
        //                                 {
        //                                     "enum": [
        //                                         "always",
        //                                         "never"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "multiline": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "minProperties": {
        //                                             "type": "integer",
        //                                             "minimum": 0
        //                                         },
        //                                         "consistent": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false,
        //                                     "minProperties": 1
        //                                 }
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false,
        //                     "minProperties": 1
        //                 }
        //             ]
        //         }
        //     ]
        //
        'object-curly-newline': [
            'error',
            {
                'ObjectExpression': {
                    'multiline': true,
                    'minProperties': 3,
                    'consistent': true
                },
                'ObjectPattern': 'never'
            }
        ],

        // enforce consistent spacing inside braces
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
        //                 "arraysInObjects": {
        //                     "type": "boolean"
        //                 },
        //                 "objectsInObjects": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'object-curly-spacing': ['error', 'always'],

        // enforce placing object properties on separate lines
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowMultiplePropertiesPerLine": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'object-property-newline': ['error'],

        // require or disallow newlines around variable declarations
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "initializations"
        //             ]
        //         }
        //     ]
        //
        'one-var-declaration-per-line': ['error', 'always'],

        // enforce variables to be declared either together or separately in functions
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "var": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "let": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "const": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "initialized": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "uninitialized": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'one-var': ['error', 'never'],

        // require or disallow assignment operator shorthand where possible
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
        //         }
        //     ]
        //
        'operator-assignment': ['error'],

        // enforce consistent linebreak style for operators
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "after",
        //                 "before",
        //                 "none",
        //                 null
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "overrides": {
        //                     "type": "object",
        //                     "properties": {
        //                         "anyOf": {
        //                             "type": "string",
        //                             "enum": [
        //                                 "after",
        //                                 "before",
        //                                 "none",
        //                                 "ignore"
        //                             ]
        //                         }
        //                     }
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'operator-linebreak': ['error', 'before'],

        // require or disallow padding within blocks
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "blocks": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "switches": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "classes": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false,
        //                     "minProperties": 1
        //                 }
        //             ]
        //         }
        //     ]
        //
        'padded-blocks': ['error', 'never'],

        // require or disallow padding lines between statements
        //
        // [Has Fixer]
        //
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': '*',
                'next': [
                    'return',
                    'break',
                    'continue'
                ]
            },
            {
                'blankLine': 'always',
                'prev': 'block-like',
                'next': 'block-like'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'directive'
            },
            {
                'blankLine': 'always',
                'prev': 'directive',
                'next': '*'
            },
            {
                'blankLine': 'never',
                'prev': 'directive',
                'next': 'directive'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'cjs-import'
            },
            {
                'blankLine': 'always',
                'prev': 'cjs-import',
                'next': '*'
            },
            {
                'blankLine': 'any',
                'prev': 'cjs-import',
                'next': 'cjs-import'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'cjs-export'
            },
            {
                'blankLine': 'always',
                'prev': 'cjs-export',
                'next': '*'
            },
            {
                'blankLine': 'any',
                'prev': 'cjs-export',
                'next': 'cjs-export'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'import'
            },
            {
                'blankLine': 'always',
                'prev': 'import',
                'next': '*'
            },
            {
                'blankLine': 'any',
                'prev': 'import',
                'next': 'import'
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'export'
            },
            {
                'blankLine': 'always',
                'prev': 'export',
                'next': '*'
            },
            {
                'blankLine': 'any',
                'prev': 'export',
                'next': 'export'
            }
        ],

        // require quotes around object literal property names
        //
        // [Has Fixer]
        //
        'quote-props': ['error', 'as-needed'],

        // enforce the consistent use of either backticks, double, or single quotes
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "single",
        //                 "double",
        //                 "backtick"
        //             ]
        //         },
        //         {
        //             "anyOf": [
        //                 {
        //                     "enum": [
        //                         "avoid-escape"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "avoidEscape": {
        //                             "type": "boolean"
        //                         },
        //                         "allowTemplateLiterals": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],

        // require JSDoc comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "require": {
        //                     "type": "object",
        //                     "properties": {
        //                         "ClassDeclaration": {
        //                             "type": "boolean"
        //                         },
        //                         "MethodDefinition": {
        //                             "type": "boolean"
        //                         },
        //                         "FunctionDeclaration": {
        //                             "type": "boolean"
        //                         },
        //                         "ArrowFunctionExpression": {
        //                             "type": "boolean"
        //                         },
        //                         "FunctionExpression": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'require-jsdoc': [
            'error',
            {
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true,
                    'ArrowFunctionExpression': false,
                    'FunctionExpression': false
                }
            }
        ],

        // enforce consistent spacing before and after semicolons
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "before": {
        //                     "type": "boolean"
        //                 },
        //                 "after": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'semi-spacing': ['error'],

        // enforce location of semicolons
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "last",
        //                 "first"
        //             ]
        //         }
        //     ]
        //
        'semi-style': ['error'],

        // require or disallow semicolons instead of ASI
        //
        // [Has Fixer]
        //
        'semi': ['error'],

        // require object keys to be sorted
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "asc",
        //                 "desc"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "caseSensitive": {
        //                     "type": "boolean"
        //                 },
        //                 "natural": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'sort-keys': ['off'],

        // require variables within the same declaration block to be sorted
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "ignoreCase": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'sort-vars': ['off'],

        // enforce consistent spacing before blocks
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "keywords": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "functions": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         },
        //                         "classes": {
        //                             "enum": [
        //                                 "always",
        //                                 "never"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'space-before-blocks': ['error'],

        // enforce consistent spacing before `function` definition opening parenthesis
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "always",
        //                         "never"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "anonymous": {
        //                             "enum": [
        //                                 "always",
        //                                 "never",
        //                                 "ignore"
        //                             ]
        //                         },
        //                         "named": {
        //                             "enum": [
        //                                 "always",
        //                                 "never",
        //                                 "ignore"
        //                             ]
        //                         },
        //                         "asyncArrow": {
        //                             "enum": [
        //                                 "always",
        //                                 "never",
        //                                 "ignore"
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],

        // enforce consistent spacing inside parentheses
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
        //                 "exceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "enum": [
        //                             "{}",
        //                             "[]",
        //                             "()",
        //                             "empty"
        //                         ]
        //                     },
        //                     "uniqueItems": true
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'space-in-parens': ['error'],

        // require spacing around infix operators
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "int32Hint": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'space-infix-ops': ['error'],

        // enforce consistent spacing before or after unary operators
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "words": {
        //                     "type": "boolean"
        //                 },
        //                 "nonwords": {
        //                     "type": "boolean"
        //                 },
        //                 "overrides": {
        //                     "type": "object",
        //                     "additionalProperties": {
        //                         "type": "boolean"
        //                     }
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],

        // enforce consistent spacing after the `//` or `/*` in a comment
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
        //                 "exceptions": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "markers": {
        //                     "type": "array",
        //                     "items": {
        //                         "type": "string"
        //                     }
        //                 },
        //                 "line": {
        //                     "type": "object",
        //                     "properties": {
        //                         "exceptions": {
        //                             "type": "array",
        //                             "items": {
        //                                 "type": "string"
        //                             }
        //                         },
        //                         "markers": {
        //                             "type": "array",
        //                             "items": {
        //                                 "type": "string"
        //                             }
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 },
        //                 "block": {
        //                     "type": "object",
        //                     "properties": {
        //                         "exceptions": {
        //                             "type": "array",
        //                             "items": {
        //                                 "type": "string"
        //                             }
        //                         },
        //                         "markers": {
        //                             "type": "array",
        //                             "items": {
        //                                 "type": "string"
        //                             }
        //                         },
        //                         "balanced": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'spaced-comment': [
            'error',
            'always',
            {
                'line': {
                    'markers': ['?']
                },
                'block': {
                    'markers': ['*'],
                    'balanced': true
                }
            }
        ],

        // enforce spacing around colons of switch statements
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "before": {
        //                     "type": "boolean"
        //                 },
        //                 "after": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        'switch-colon-spacing': ['error'],

        // require or disallow spacing between template tags and their literals
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
        //         }
        //     ]
        //
        'template-tag-spacing': ['error'],

        // require or disallow Unicode byte order mark (BOM)
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
        //         }
        //     ]
        //
        'unicode-bom': ['error'],

        // require parenthesis around regex literals
        //
        // [Has Fixer]
        //
        'wrap-regex': ['error']
    }
};
