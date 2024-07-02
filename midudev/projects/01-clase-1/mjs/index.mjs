//.js -> por defecto utiliza CommonJS
//.mjs -> para utilizar ES Modules
//.cjs -> para utilizar Common JS

import { sum, sub, mult } from "./sum.mjs";

console.log(sum(5, 8));
console.log(sum(-3, 7));
console.log(sum(-5, -2));
console.log(sub(5, 8));
console.log(sub(-3, 7));
console.log(sub(-5, -2));
console.log(mult(5, 8));
console.log(mult(-3, 7));
console.log(mult(-5, -2));