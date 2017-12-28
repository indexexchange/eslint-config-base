module.exports = {
    "rules": {
        // require or disallow initialization in variable declarations
        //
        "init-declarations": ["error", "always"],

        // disallow `catch` clause parameters from shadowing variables in the outer
        // scope
        //
        "no-catch-shadow": ["off"],

        // disallow deleting variables
        //
        "no-delete-var": ["error"],

        // disallow labels that share a name with a variable
        //
        "no-label-var": ["off"],

        // disallow specified global variables
        //
        "no-restricted-globals": ["off"],

        // disallow identifiers from shadowing restricted names
        //
        "no-shadow-restricted-names": ["error"],

        // disallow variable declarations from shadowing variables declared in the outer
        // scope
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "builtinGlobals": {
        //                     "type": "boolean"
        //                 },
        //                 "hoist": {
        //                     "enum": [
        //                         "all",
        //                         "functions",
        //                         "never"
        //                     ]
        //                 },
        //                 "allow": {
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
        "no-shadow": ["error", {
            "builtinGlobals": true,
            "hoist": "all",
            "allow": [
                "callback",
                "cb",
                "done",
                "e",
                "err",
                "error",
                "ex",
                "reject",
                "resolve"
            ]
        }],

        // disallow initializing variables to `undefined`
        //
        // [Has Fixer]
        //
        "no-undef-init": ["error"],

        // disallow the use of undeclared variables unless mentioned in `/*global */`
        // comments
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "typeof": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "no-undef": ["error", {
            "typeof": true
        }],

        // disallow the use of `undefined` as an identifier
        //
        "no-undefined": ["error"],

        // disallow unused variables
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "all",
        //                         "local"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "vars": {
        //                             "enum": [
        //                                 "all",
        //                                 "local"
        //                             ]
        //                         },
        //                         "varsIgnorePattern": {
        //                             "type": "string"
        //                         },
        //                         "args": {
        //                             "enum": [
        //                                 "all",
        //                                 "after-used",
        //                                 "none"
        //                             ]
        //                         },
        //                         "ignoreRestSiblings": {
        //                             "type": "boolean"
        //                         },
        //                         "argsIgnorePattern": {
        //                             "type": "string"
        //                         },
        //                         "caughtErrors": {
        //                             "enum": [
        //                                 "all",
        //                                 "none"
        //                             ]
        //                         },
        //                         "caughtErrorsIgnorePattern": {
        //                             "type": "string"
        //                         }
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        //
        "no-unused-vars": ["error"],

        // disallow the use of variables before they are defined
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "enum": [
        //                         "nofunc"
        //                     ]
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "functions": {
        //                             "type": "boolean"
        //                         },
        //                         "classes": {
        //                             "type": "boolean"
        //                         },
        //                         "variables": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        "no-use-before-define": ["error"]
    }
};
