import add from './add';
import sub from './sub';
import mul from './mul';
import div from './div';

console.log('hello mann....!!');
var num1 = 100;
var num2 = 50;
console.log(add(num1, num2));
console.log(sub(num1, num2));
console.log(mul(num1, num2));
console.log(div(num1, num2));

if (module.hot) {
    module.hot.accept()
}
document.querySelector("h2").innerText = "hello... this is an hot modular replacement"
