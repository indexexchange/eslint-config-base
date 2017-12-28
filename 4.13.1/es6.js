module.exports = {
    "rules": {
        // require braces around arrow function bodies
        //
        // [Has Fixer]
        //
        "arrow-body-style": ["error", "always"],

        // require parentheses around arrow function arguments
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "always",
        //                 "as-needed"
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "requireForBlockBody": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "arrow-parens": ["error"],

        // enforce consistent spacing before and after the arrow in arrow functions
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
        "arrow-spacing": ["error"],

        // require `super()` calls in constructors
        //
        "constructor-super": ["error"],

        // enforce consistent spacing around `*` operators in generator functions
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
        //                         "before",
        //                         "after",
        //                         "both",
        //                         "neither"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "before": {
        //                             "type": "boolean"
        //                         },
        //                         "after": {
        //                             "type": "boolean"
        //                         },
        //                         "named": {
        //                             "oneOf": [
        //                                 {
        //                                     "enum": [
        //                                         "before",
        //                                         "after",
        //                                         "both",
        //                                         "neither"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "before": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "after": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false
        //                                 }
        //                             ]
        //                         },
        //                         "anonymous": {
        //                             "oneOf": [
        //                                 {
        //                                     "enum": [
        //                                         "before",
        //                                         "after",
        //                                         "both",
        //                                         "neither"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "before": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "after": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false
        //                                 }
        //                             ]
        //                         },
        //                         "method": {
        //                             "oneOf": [
        //                                 {
        //                                     "enum": [
        //                                         "before",
        //                                         "after",
        //                                         "both",
        //                                         "neither"
        //                                     ]
        //                                 },
        //                                 {
        //                                     "type": "object",
        //                                     "properties": {
        //                                         "before": {
        //                                             "type": "boolean"
        //                                         },
        //                                         "after": {
        //                                             "type": "boolean"
        //                                         }
        //                                     },
        //                                     "additionalProperties": false
        //                                 }
        //                             ]
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        "generator-star-spacing": ["error"],

        // disallow reassigning class members
        //
        "no-class-assign": ["error"],

        // disallow arrow functions where they could be confused with comparisons
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowParens": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "no-confusing-arrow": ["error"],

        // disallow reassigning `const` variables
        //
        "no-const-assign": ["error"],

        // disallow duplicate class members
        //
        "no-dupe-class-members": ["error"],

        // disallow duplicate module imports
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "includeExports": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "no-duplicate-imports": ["error", {
            "includeExports": true
        }],

        // disallow `new` operators with the `Symbol` object
        //
        "no-new-symbol": ["error"],

        // disallow specified modules when loaded by `import`
        //
        "no-restricted-imports": ["off"],

        // disallow `this`/`super` before calling `super()` in constructors
        //
        "no-this-before-super": ["error"],

        // disallow unnecessary computed property keys in object literals
        //
        // [Has Fixer]
        //
        "no-useless-computed-key": ["error"],

        // disallow unnecessary constructors
        //
        "no-useless-constructor": ["error"],

        // disallow renaming import, export, and destructured assignments to the same
        // name
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "ignoreDestructuring": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreImport": {
        //                     "type": "boolean"
        //                 },
        //                 "ignoreExport": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "no-useless-rename": ["error"],

        // require `let` or `const` instead of `var`
        //
        // [Has Fixer]
        //
        "no-var": ["error"],

        // require or disallow method and property shorthand syntax for object literals
        //
        // [Has Fixer]
        //
        "object-shorthand": ["error", "never"],

        // require using arrow functions for callbacks
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowNamedFunctions": {
        //                     "type": "boolean"
        //                 },
        //                 "allowUnboundThis": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "prefer-arrow-callback": ["error", {
            "allowNamedFunctions": true,
            "allowUnboundThis": false
        }],

        // require `const` declarations for variables that are never reassigned after
        // declared
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "destructuring": {
        //                     "enum": [
        //                         "any",
        //                         "all"
        //                     ]
        //                 },
        //                 "ignoreReadBeforeAssign": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "prefer-const": ["error"],

        // require destructuring from arrays and/or objects
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "VariableDeclarator": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "array": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "object": {
        //                                     "type": "boolean"
        //                                 }
        //                             },
        //                             "additionalProperties": false
        //                         },
        //                         "AssignmentExpression": {
        //                             "type": "object",
        //                             "properties": {
        //                                 "array": {
        //                                     "type": "boolean"
        //                                 },
        //                                 "object": {
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
        //                         "array": {
        //                             "type": "boolean"
        //                         },
        //                         "object": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         },
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "enforceForRenamedProperties": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "prefer-destructuring": ["off"],

        // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and
        // hexadecimal literals
        //
        // [Has Fixer]
        //
        "prefer-numeric-literals": ["error"],

        // require rest parameters instead of `arguments`
        //
        "prefer-rest-params": ["error"],

        // require spread operators instead of `.apply()`
        //
        // [Has Fixer]
        //
        "prefer-spread": ["error"],

        // require template literals instead of string concatenation
        //
        // [Has Fixer]
        //
        "prefer-template": ["error"],

        // require generator functions to contain `yield`
        //
        "require-yield": ["error"],

        // enforce spacing between rest and spread operators and their expressions
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
        "rest-spread-spacing": ["error"],

        // enforce sorted import declarations within modules
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
        //                 },
        //                 "memberSyntaxSortOrder": {
        //                     "type": "array",
        //                     "items": {
        //                         "enum": [
        //                             "none",
        //                             "all",
        //                             "multiple",
        //                             "single"
        //                         ]
        //                     },
        //                     "uniqueItems": true,
        //                     "minItems": 4,
        //                     "maxItems": 4
        //                 },
        //                 "ignoreMemberSort": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "sort-imports": ["error"],

        // require symbol descriptions
        //
        "symbol-description": ["error"],

        // require or disallow spacing around embedded expressions of template strings
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
        "template-curly-spacing": ["error"],

        // require or disallow spacing around the `*` in `yield*` expressions
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
        //                         "before",
        //                         "after",
        //                         "both",
        //                         "neither"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "before": {
        //                             "type": "boolean"
        //                         },
        //                         "after": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        "yield-star-spacing": ["error"]
    }
};
