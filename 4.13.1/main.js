module.exports = {
    // Limits this .eslintrc.* to a specific project.
    //
    "root": true,

    // Specify the parser that should be used.
    //
    "parser": "espree",

    // Setting parser options helps ESLint determine what is a parsing error. All
    // language options are false by default.
    //
    "parserOptions": {
        // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript syntax
        // you want to use
        "ecmaVersion": 6,

        // set to "script" (default) or "module" if your code is in ECMAScript modules
        "sourceType": "module",

        // an object indicating which additional language features you’d like to use
        //
        "ecmaFeatures": {
            // allow return statements in the global scope.
            //
            "globalReturn": false,

            // enable global strict mode (if ecmaVersion is 5 or greater)
            //
            "impliedStrict": true,

            // enable JSX
            //
            "jsx": false
        }
    },

    // An environment defines global variables that are predefined.
    //
    "env": {
        // browser global variables
        //
        "browser": false,

        // Node.js global variables and Node.js scoping
        //
        "node": false,

        // CommonJS global variables and CommonJS scoping (use this for browser-only
        // code that uses Browserify/WebPack)
        //
        "commonjs": false,

        // Globals common to both Node.js and Browser
        //
        "shared-node-browser": false,

        // enable all ECMAScript 6 features except for modules (this automatically sets
        // the ecmaVersion parser option to 6)
        //
        "es6": false,

        // web workers global variables
        //
        "worker": false,

        // defines require() and define() as global variables as per the amd spec
        //
        "amd": false,

        // adds all of the Mocha testing global variables
        //
        "mocha": false,

        // adds all of the Jasmine testing global variables for version 1.3 and 2.0
        //
        "jasmine": false,

        // Jest global variables
        //
        "jest": false,

        // PhantomJS global variables
        //
        "phantomjs": false,

        // Protractor global variables
        //
        "protractor": false,

        // QUnit global variables
        //
        "qunit": false,

        // jQuery global variables
        //
        "jquery": false,

        // Prototype.js global variables
        //
        "prototypejs": false,

        // ShellJS global variables
        //
        "shelljs": false,

        // Meteor global variables
        //
        "meteor": false,

        // MongoDB global variables.
        //
        "mongo": false,

        // AppleScript global variables
        //
        "applescript": false,

        // Java 8 Nashorn global variables
        //
        "nashorn": false,

        // Service Worker global variables
        //
        "serviceworker": false,

        // Atom test helper globals
        //
        "atomtest": false,

        // Ember test helper globals
        //
        "embertest": false,

        // WebExtensions globals
        //
        "webextensions": false,

        // GreaseMonkey globals
        //
        "greasemonkey": false
    }
};
