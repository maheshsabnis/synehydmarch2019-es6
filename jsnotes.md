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
5. JavaScript DOM Objects
   1. window
      1. Browser Window Instance
      2. load
   2. document
      1. Current HTML DOM loaded inside the Window instance
      2. document object uses all events of window object
      3. Methods
         1. getElementById
            1. returns a single DOM Element object based on its id
         2. getElementsByName
            1. return an array of DOM elements based on 'name' attribute of DOM
         3. getElemenetsByTag
            1. returns an array based on Tag Name
      4. Events for DOM
         1. change --> onChange
         2. keyUp --> onKeyUp
         3. mouseenter
         4. mouseleave

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
   1. A mechansim of building immutable string as HTML string Expressions.
   2. Syntax
      1. `The String is ${Expresion} ${Expression}...`
         1. \${Expression} will be replaced by actual value of Expression
      2. This also support Multi-line String Objects
3. Array Object Methods with Data Structures
   1. Array
      1. Homogeneous and Hetrogeneous Data Store
      2. Methods
         1. push()/pop()/indexOf()
         2. ES 6 methods
            1. find()
            2. filter()
            3. sort()
      3. Iteration using
         1. ES 3 to 5
            1. for loop
            2. for..in loop
         2. ES 6
            1. for..of loop
               1. Symbol.iterator()
   2. Set
      1. Hash Set
      2. Unique Data in it
   3. Map
      1. Dictionary
4. Arrow Function / Operator
   1. New Syntax that represent an input expression for a method that accepts callback as input parameter
      1. function abc(function(a,b){...});
      2. function abc((a,b)=>{...}); <---- Arrow Operator
5. The 'rest' parameters

   1. variable number of parameters to a method.
   2. Syntax is
      1. function abc(...data){...}
         1. data will be internally treated as 'arguments' array
         2. Uses
            1. abc(1), abc(1,2), abc(1,2,3)
      2. function doWork(a,b,...data){...}
         1. If a method accepts fixed and rest parameters, then rest parameters will always be at end
      3. The ... ar known as the 'spread operator' and internally it is treated as Object.assign([],source object)
         1. Object.assign(target,source)
         2. e.g.
            1. function calculate(...data) ---> calulate(1,2)
            2. arguments array contains [1,2]
               1. Object.assign([],arguments)

6. Object Oriented Programming
   1. Class
      1. "this" scope
      2. The 'class' keyword for defining class
         1. The public definitions for properties / members using 'this' prefix
         2. All methods /functions are 'public' by default
            1. Note: the 'function' keyword is not required for function definition in class
         3. We need 'constructor' function for defining the public member variables/properties
7. Collections
8. Promises
9. Modules
