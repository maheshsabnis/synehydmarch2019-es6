1. JavaScript, the Object-Based-Dynamic-Language
   1. "Everything" is object
      1. Object
         1. function
            1. Reference Functions
            2. Close-Type Functions aka complete function
            3. Immediately Invoked Function Expressions (IIFE)
            4. Anonymous Functions
         2. Array
            1. The "only" Data Structure
         3. "Any Declaration"
      2. Date
         1. d/mm/yyyy (INDIAN)
         2. m/dd/yyyy (en-US)
      3. Array
         1. Array Methods
2. Keywords
   1. The var, the declaration for Object type
   2. The function, the declaration for function type
   3. [], represents the array declartion type
   4. date, date object
3. Methods
   1. Numeric methods
      1. parseInt(), parseFloat()
   2. String Methods
      1. concat()
   3. Array Methods
      1. ES 3 to ES 6+
4. Defaults
   1. The "arguments", the default array that represents parameters to method
   2. The "getProperties()", method to read properties for Object type
   3. The "+" operator, default for string concatination
      1. Otherwise it will be used for Numeric Add
   4. All other numeric operators are default for numeric
      1. -, \*,/
   5. +=, -=
   6. ==, value equality, ===, deep equality (type+value)
   7. for() and for..in loops for value based iteration
   8. constructor function, used in case of the reference function when it is used as class.
   9. The 'new' nmoniker for instance generation.

The JavaScript file can be executed on Node.js server using the following command

- node <File>.js

====================================================================================================================================
ES 3 Foundations
ES5+6, the modern JavaScript aka High-Level JavaScript

- The Application Configuration file for the ES 6 Project

  - # The "package.json" - Created using 'npm -init' command - Global Configuration of Packages - npm install -g <PACKAGE-NAME> - Application Local Configuration - npm install --save-dev <PACKAGE-NAME> - The 'babel-core', 'babel-cli' for transpilation - The 'babel-preset-es2015' - Babel Transpilation for ES 6 Core features - Promise - async - await - babel-plugin-transform-es2015-modules-commonjs - Modularity of ES 6 - package.json objects - "dependencies" - Runtime dependencies for the application - "devDependencies" - Dependencies used by application while development / testing - npm install --save-dev <PACKAGE-NAME> - "scripts" - Command scripts for - build application - run application - test application

====================================================================================================================================================
ES 6 Features

1. The 'Local Scope aka block scope Declaration using "let" keyword'
2. Template String
3. Array Object Methods
4. Arrow Function / Operator
5. Class
   1. this scope
6. Collections
7. Promises
8. Modules
