import { choice, remove } from './helpers';
import { foodArr } from './foods';


let fruit = choice(foodArr);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let others = remove(fruit, foodArr);

console.log(`I'm sorry, we're all out. We have ${others.length} left.`);