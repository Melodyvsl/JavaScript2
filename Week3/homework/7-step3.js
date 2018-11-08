
// step 3 => 7
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x); 
console.log(x); //9  

/*the f1 function receive a variable as an input parameter and it passes the variable by value.
It means that  the variable will be only changed inside the fucntion and never affect the outside.*/

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); //10

/* the f2 function receive an object as an input parameter and it passes the variable by reference
It means that the varibale will be changed both inside and outside in the second fucntion .
 */
