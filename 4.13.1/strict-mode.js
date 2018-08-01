module.exports = {
    'rules': {
        // require or disallow strict mode directives
        //
        // [Has Fixer]
        //
        // Schema:
        //
        //     [
        //         {
        //             "enum": [
        //                 "never",
        //                 "global",
        //                 "function",
        //                 "safe"
        //             ]
        //         }
        //     ]
        //
        'strict': ['error', 'global']
    }
};
