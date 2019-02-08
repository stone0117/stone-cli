import {snlog} from './log';

let pattern = /\d+/;

console.log(pattern.test('abc123'));

var str = 'hello world WORLD';

let number = str.search(/world/i);

snlog(number, `number`, 'regex.js', '10');
snlog(number, `number`, 'regex.js', '10');
snlog(number, `number`, 'regex.js', '10');
