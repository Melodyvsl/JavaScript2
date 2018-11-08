'use strict';

// step 3 => 1 
function foo(func) {
    func();
  }
  
  function bar() {
    console.log('Hello, I am bar!');
  }
  
  foo(bar);

