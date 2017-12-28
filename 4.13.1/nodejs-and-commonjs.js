module.exports = {
    "rules": {
        // require `return` statements after callbacks
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "array",
        //             "items": {
        //                 "type": "string"
        //             }
        //         }
        //     ]
        //
        "callback-return": ["error"],

        // require `require()` calls to be placed at top-level module scope
        //
        "global-require": ["error"],

        // require error handling in callbacks
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "string"
        //         }
        //     ]
        //
        "handle-callback-err": ["error"],

        // disallow use of the Buffer() constructor
        //
        "no-buffer-constructor": ["error"],

        // disallow `require` calls to be mixed with regular variable declarations
        //
        // Schema:
        //
        //     [
        //         {
        //             "oneOf": [
        //                 {
        //                     "type": "boolean"
        //                 },
        //                 {
        //                     "type": "object",
        //                     "properties": {
        //                         "grouping": {
        //                             "type": "boolean"
        //                         },
        //                         "allowCall": {
        //                             "type": "boolean"
        //                         }
        //                     },
        //                     "additionalProperties": false
        //                 }
        //             ]
        //         }
        //     ]
        //
        "no-mixed-requires": ["error", {
            "grouping": true,
            "allowCall": true
        }],

        // disallow `new` operators with calls to `require`
        //
        "no-new-require": ["error"],

        // disallow string concatenation with `__dirname` and `__filename`
        //
        "no-path-concat": ["error"],

        // disallow the use of `process.env`
        //
        "no-process-env": ["off"],

        // disallow the use of `process.exit()`
        //
        "no-process-exit": ["error"],

        // disallow specified modules when loaded by `require`
        //
        "no-restricted-modules": ["off"],

        // disallow synchronous methods
        //
        // Schema:
        //
        //     [
        //         {
        //             "type": "object",
        //             "properties": {
        //                 "allowAtRootLevel": {
        //                     "type": "boolean"
        //                 }
        //             },
        //             "additionalProperties": false
        //         }
        //     ]
        //
        "no-sync": ["error"]
    }
};
